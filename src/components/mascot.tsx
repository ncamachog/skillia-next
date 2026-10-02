"use client";
/* eslint-disable @next/next/no-img-element */
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useLocale } from "./locale-provider";

const POSES = ["wave", "idea", "think", "thumbs", "laptop", "zen", "tablet", "jump", "point", "chart", "lying", "run"];

type Api = { observe: () => void };

/** Robot que camina por la página, cambia de pose, habla y visita las secciones `[data-bot="pose|mensaje"]`. */
export default function Mascot() {
  const path = usePathname();
  const { t } = useLocale();
  const tipsRef = useRef<string[]>(t.bot.tips);
  useEffect(() => { tipsRef.current = t.bot.tips; }, [t]);
  const botRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const bubRef = useRef<HTMLSpanElement>(null);
  const api = useRef<Api | null>(null);

  useEffect(() => {
    const bot = botRef.current!, img = imgRef.current!, bub = bubRef.current!;
    const w = window, d = document;
    const reduce = w.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let X = -200, Y = 0, token = 0, pose = "wave", tipI = 0, timers: number[] = [];
    let seen = new WeakSet<Element>();

    POSES.forEach((p) => { const i = new Image(); i.src = `/img/pets/${p}.webp`; });

    const S = () => (w.innerWidth < 720 ? 66 : 96);
    const vw = () => d.documentElement.clientWidth;
    const vh = () => w.innerHeight;
    const rnd = (a: number, b: number) => a + Math.random() * (b - a);
    const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
    const later = (fn: () => void, ms: number) => { const t = w.setTimeout(fn, ms); timers.push(t); return t; };
    const clear = () => { timers.forEach(clearTimeout); timers = []; };
    const clampX = (x: number) => Math.max(6, Math.min(vw() - S() - 6, x));
    const clampY = (y: number) => Math.max(80, Math.min(vh() - S() * 1.2 - 6, y));
    const floorY = () => vh() - S() * 1.25 - 10;

    function setPose(p: string) {
      pose = p; img.src = `/img/pets/${p}.webp`;
      bot.style.setProperty("--bs", `${p === "lying" ? S() * 1.25 : S()}px`);
      bot.classList.toggle("idle", p !== "run");
    }
    function place(x: number, y: number, ms: number) {
      bot.style.transition = ms ? `transform ${ms}ms cubic-bezier(.45,.05,.55,.95)` : "none";
      bot.style.transform = `translate3d(${Math.round(x)}px,${Math.round(y)}px,0)`;
      X = x; Y = y;
    }
    function say(txt: string | null | undefined, ms = 4200) {
      if (!txt) { bot.classList.remove("say"); return; }
      const r = X + S() / 2;
      bot.classList.toggle("bub-r", r > vw() - 130);
      bot.classList.toggle("bub-l", r < 130);
      bot.classList.toggle("bub-b", Y < 110);
      bub.textContent = txt; bot.classList.add("say");
      later(() => bot.classList.remove("say"), ms);
    }
    function hop() { bot.classList.remove("hop"); void bot.offsetWidth; bot.classList.add("hop"); }
    function walk(tx: number, ty: number, done?: () => void) {
      tx = clampX(tx); ty = clampY(ty);
      const dist = Math.hypot(tx - X, ty - Y);
      if (dist < 12) { done?.(); return; }
      const speed = w.innerWidth < 720 ? 120 : 170, ms = Math.max(500, (dist / speed) * 1000);
      bot.classList.toggle("flip", tx < X);
      bot.classList.remove("say");
      setPose("run"); bot.classList.add("walk");
      place(tx, ty, ms);
      later(() => { bot.classList.remove("walk"); done?.(); }, ms + 30);
    }
    function rest(p: string, txt: string | null | undefined, ms: number, next: () => void) {
      bot.classList.remove("flip");
      setPose(p); hop(); if (txt) say(txt, ms - 300);
      later(next, ms);
    }
    function wander() {
      const my = token, small = w.innerWidth < 720;
      const tx = rnd(10, vw() - S() - 10);
      const ty = small ? floorY() : Math.random() < 0.25 ? rnd(90, vh() * 0.4) : rnd(vh() * 0.45, floorY());
      walk(tx, ty, () => {
        if (my !== token) return;
        const p = pick(POSES.filter((q) => q !== "run" && q !== pose));
        const talk = Math.random() < 0.45 ? tipsRef.current[tipI++ % tipsRef.current.length] : null;
        rest(p, talk, rnd(3200, 5600), () => { if (my === token) wander(); });
      });
    }
    function visit(el: Element) {
      const parts = (el.getAttribute("data-bot") || "").split("|"), my = ++token;
      clear();
      const r = el.getBoundingClientRect();
      const x = w.innerWidth >= 1000 ? vw() - S() - 18 : Math.random() < 0.5 ? 10 : vw() - S() - 10;
      const y = w.innerWidth < 720 ? floorY() : Math.max(100, Math.min(vh() - S() * 1.3, r.top + 60));
      walk(x, y, () => {
        if (my !== token) return;
        rest(parts[0] || "wave", parts[1], 5200, () => { if (my === token) wander(); });
      });
    }
    function onTap() {
      const my = ++token; clear();
      bot.classList.remove("walk", "flip");
      place(X, Y, 0);
      setPose(pick(["jump", "wave", "thumbs", "idea"])); hop(); say(tipsRef.current[tipI++ % tipsRef.current.length], 4600);
      later(() => { if (my === token) wander(); }, 5200);
    }
    function onSay(e: Event) {
      const { pose: p, text } = (e as CustomEvent<{ pose: string; text: string }>).detail;
      const my = ++token; clear();
      setPose(p); hop(); say(text, 3600);
      later(() => { if (my === token) wander(); }, 4000);
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onTap(); } };
    const onResize = () => { place(clampX(X), clampY(Y), 0); setPose(pose); };
    const onVis = () => { if (d.hidden) clear(); else if (!reduce) { ++token; wander(); } };

    let io: IntersectionObserver | null = null;
    api.current = {
      observe() {
        io?.disconnect(); seen = new WeakSet();
        if (reduce || !("IntersectionObserver" in w)) return;
        io = new IntersectionObserver((es) => es.forEach((e) => {
          if (e.isIntersecting && !seen.has(e.target)) { seen.add(e.target); io?.unobserve(e.target); visit(e.target); }
        }), { threshold: 0.55 });
        d.querySelectorAll("[data-bot]").forEach((el) => io!.observe(el));
      },
    };

    bot.addEventListener("click", onTap);
    bot.addEventListener("keydown", onKey);
    w.addEventListener("sk-bot-say", onSay);
    w.addEventListener("resize", onResize);
    d.addEventListener("visibilitychange", onVis);

    setPose("wave");
    if (reduce) {
      place(vw() - S() - 16, floorY() - 6, 0);
    } else {
      place(-S() - 20, floorY() - 6, 0);
      bot.classList.add("flip");
      later(() => {
        const my = ++token;
        walk(vw() * 0.12, floorY() - 6, () => {
          if (my !== token) return;
          rest("wave", tipsRef.current[0], 4600, () => { if (my === token) wander(); });
        });
      }, 900);
    }
    return () => {
      clear(); io?.disconnect(); api.current = null;
      bot.removeEventListener("click", onTap);
      bot.removeEventListener("keydown", onKey);
      w.removeEventListener("sk-bot-say", onSay);
      w.removeEventListener("resize", onResize);
      d.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // Cada ruta nueva: volver a enganchar las secciones [data-bot].
  useEffect(() => { api.current?.observe(); }, [path]);

  return (
    <div id="sk-bot" ref={botRef} role="button" tabIndex={0} aria-label={t.bot.label}>
      <span className="bub" ref={bubRef} aria-hidden="true" />
      <div className="in"><img ref={imgRef} alt="" draggable={false} src="/img/pets/wave.webp" /></div>
      <span className="sh" />
    </div>
  );
}
