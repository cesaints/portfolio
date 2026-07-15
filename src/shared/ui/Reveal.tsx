"use client";
import { motion, useReducedMotion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x?: number; y?: number }> = {
    up: { y: 28 },
    down: { y: -28 },
    left: { x: 28 },
    right: { x: -28 },
    none: {},
};

/**
 * Professional scroll reveal. Bidirectional: content fades/blurs in when it
 * enters the viewport and fades back out when it leaves (appears going up,
 * hides going down). No-op under reduced-motion.
 */
export default function Reveal({
    children,
    delay = 0,
    direction = "up",
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    direction?: Direction;
    className?: string;
}) {
    const reduced = useReducedMotion();
    if (reduced) return <div className={className}>{children}</div>;
    const o = offset[direction];
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, filter: "blur(6px)", ...o }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </motion.div>
    );
}
