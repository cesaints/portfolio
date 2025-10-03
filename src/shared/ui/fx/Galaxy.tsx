"use client";
import { useEffect, useRef } from "react";

export default function Galaxy({ className = "" }: { className?: string }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const c = ref.current!, ctx = c.getContext("2d")!;
        const DPR = Math.min(window.devicePixelRatio || 1, 2);

        const resize = () => {
            const w = window.innerWidth, h = window.innerHeight;
            c.style.width = "100%"; c.style.height = "100%";
            c.width = w * DPR; c.height = h * DPR;
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        };
        resize(); window.addEventListener("resize", resize);

        const stars = Array.from({ length: 500 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 1.6 + .2,
            t: Math.random() * Math.PI * 2
        }));
        type Comet = { x: number; y: number; vx: number; vy: number; life: number };
        let comets: Comet[] = [];
        let raf = 0;
        const loop = () => {
            raf = requestAnimationFrame(loop);
            const w = window.innerWidth, h = window.innerHeight;

            // nebulosa ampla
            const g = ctx.createRadialGradient(w * .5, h * .35, 0, w * .5, h * .35, Math.max(w, h) * .9);
            g.addColorStop(0, "rgba(124,58,237,.18)");
            g.addColorStop(.5, "rgba(34,211,238,.10)");
            g.addColorStop(1, "rgba(0,0,0,0)");
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);

            // estrelas
            for (const s of stars) {
                s.t += 0.02;
                ctx.globalAlpha = 0.6 + 0.4 * Math.sin(s.t);
                ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill();
            }
            ctx.globalAlpha = 1;

            // cometas
            if (Math.random() < 0.006) {
                const L = Math.random() < .5;
                comets.push({ x: L ? -60 : w + 60, y: Math.random() * h * .8 + h * .05, vx: L ? 2.2 : -2.2, vy: -.4, life: 1 });
            }
            comets = comets.filter(c => c.life > 0);
            for (const m of comets) {
                m.x += m.vx; m.y += m.vy; m.life -= 0.006;
                const trail = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 35, m.y - m.vy * 35);
                trail.addColorStop(0, "rgba(34,211,238,.95)"); trail.addColorStop(1, "rgba(124,58,237,0)");
                ctx.strokeStyle = trail; ctx.lineWidth = 2;
                ctx.beginPath(); ctx.moveTo(m.x - m.vx * 35, m.y - m.vy * 35); ctx.lineTo(m.x, m.y); ctx.stroke();
                ctx.beginPath(); ctx.arc(m.x, m.y, 2, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,255,255,.95)"; ctx.fill();
            }
        };
        loop();
        return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
    }, []);

    return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0" />;
}
