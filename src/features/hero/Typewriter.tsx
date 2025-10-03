"use client";
import { useEffect, useState } from "react";

export default function Typewriter({
    text, speed = 20, className = ""
}: { text: string; speed?: number; className?: string }) {
    const [i, setI] = useState(0);

    useEffect(() => {
        setI(0);
        const id = setInterval(() => {
            setI((prev) => (prev < text.length ? prev + 1 : prev));
        }, speed);
        return () => clearInterval(id);
    }, [text, speed]);

    return <span className={className}>{text.slice(0, i)}</span>;
}
