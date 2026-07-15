"use client";
import { useEffect, useRef } from "react";

export default function Galaxy({ className = "" }: { className?: string }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const c = ref.current;
        if (!c) return;
        const ctx = c.getContext("2d");
        if (!ctx) return;

        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        const DPR = Math.min(window.devicePixelRatio || 1, 2);

        const resize = () => {
            const w = window.innerWidth,
                h = window.innerHeight;
            c.style.width = "100%";
            c.style.height = "100%";
            c.width = w * DPR;
            c.height = h * DPR;
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        };
        resize();
        window.addEventListener("resize", resize);

        const starCount = window.innerWidth < 640 ? 180 : 380;
        const stars = Array.from({ length: starCount }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 1.4 + 0.2,
            t: Math.random() * Math.PI * 2,
        }));

        type Comet = { x: number; y: number; vx: number; vy: number; life: number };
        let comets: Comet[] = [];

        const drawFrame = (animate: boolean) => {
            const w = window.innerWidth,
                h = window.innerHeight;
            const g = ctx.createRadialGradient(
                w * 0.5,
                h * 0.35,
                0,
                w * 0.5,
                h * 0.35,
                Math.max(w, h) * 0.9
            );
            g.addColorStop(0, "rgba(124,58,237,.14)");
            g.addColorStop(0.5, "rgba(34,211,238,.07)");
            g.addColorStop(1, "rgba(0,0,0,0)");
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, w, h);

            for (const s of stars) {
                if (animate) s.t += 0.02;
                ctx.globalAlpha = 0.55 + 0.25 * Math.sin(s.t);
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = "#fff";
                ctx.fill();
            }
            ctx.globalAlpha = 1;

            if (!animate) return;
            if (Math.random() < 0.003) {
                const L = Math.random() < 0.5;
                comets.push({
                    x: L ? -60 : w + 60,
                    y: Math.random() * h * 0.8 + h * 0.05,
                    vx: L ? 2.2 : -2.2,
                    vy: -0.4,
                    life: 1,
                });
            }
            comets = comets.filter((m) => m.life > 0);
            for (const m of comets) {
                m.x += m.vx;
                m.y += m.vy;
                m.life -= 0.006;
                const trail = ctx.createLinearGradient(
                    m.x,
                    m.y,
                    m.x - m.vx * 30,
                    m.y - m.vy * 30
                );
                trail.addColorStop(0, "rgba(34,211,238,.7)");
                trail.addColorStop(1, "rgba(124,58,237,0)");
                ctx.strokeStyle = trail;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(m.x - m.vx * 30, m.y - m.vy * 30);
                ctx.lineTo(m.x, m.y);
                ctx.stroke();
            }
        };

        if (reduced) {
            drawFrame(false);
            return () => window.removeEventListener("resize", resize);
        }

        let raf = 0;
        let running = true;
        const loop = () => {
            if (!running) return;
            raf = requestAnimationFrame(loop);
            drawFrame(true);
        };

        const onVisibility = () => {
            if (document.hidden) {
                running = false;
                cancelAnimationFrame(raf);
            } else if (!running) {
                running = true;
                loop();
            }
        };
        document.addEventListener("visibilitychange", onVisibility);

        // Defer start until the browser is idle so it never competes with LCP.
        const w = window as typeof window & {
            requestIdleCallback?: (cb: () => void) => number;
            cancelIdleCallback?: (id: number) => void;
        };
        const start = () => loop();
        const idle = w.requestIdleCallback
            ? w.requestIdleCallback(start)
            : window.setTimeout(start, 400);

        return () => {
            running = false;
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", onVisibility);
            if (w.cancelIdleCallback) {
                w.cancelIdleCallback(idle);
            } else {
                clearTimeout(idle);
            }
        };
    }, []);

    return (
        <canvas
            ref={ref}
            aria-hidden
            className={`pointer-events-none fixed inset-0 z-0 opacity-70 ${className}`}
        />
    );
}
