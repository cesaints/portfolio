"use client";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/** Thin gradient progress bar at the very top of the page. */
export default function ScrollProgress() {
    const reduced = useReducedMotion();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
    if (reduced) return null;
    return (
        <motion.div
            aria-hidden
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left [background:var(--grad-brand)]"
        />
    );
}
