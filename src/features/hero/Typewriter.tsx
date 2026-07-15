"use client";
import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Types text. Accepts a single string or an array it rotates through
 * (type → hold → delete → next). Never the LCP element — subline only.
 */
export default function Typewriter({
    text,
    speed = 45,
    className = "",
}: {
    text: string | string[];
    speed?: number;
    className?: string;
}) {
    const phrases = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
    const reduced = useReducedMotion();
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [len, setLen] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (reduced) return; // render full first phrase, no animation
        const current = phrases[phraseIdx % phrases.length];

        if (!deleting && len === current.length) {
            const hold = setTimeout(() => setDeleting(true), 1600);
            return () => clearTimeout(hold);
        }
        if (deleting && len === 0) {
            setDeleting(false);
            setPhraseIdx((i) => (i + 1) % phrases.length);
            return;
        }
        const id = setTimeout(
            () => setLen((l) => l + (deleting ? -1 : 1)),
            deleting ? speed / 2 : speed
        );
        return () => clearTimeout(id);
    }, [len, deleting, phraseIdx, phrases, speed, reduced]);

    const current = phrases[phraseIdx % phrases.length];
    const shown = reduced ? phrases[0] : current.slice(0, len);

    return (
        <span className={className}>
            {shown}
            {!reduced && (
                <span className="ml-0.5 inline-block w-px animate-pulse bg-current align-middle" aria-hidden>
                    &nbsp;
                </span>
            )}
        </span>
    );
}
