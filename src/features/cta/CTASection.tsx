import Link from "next/link";
import { buttonClasses } from "@shared/ui/button/styles";

export default function CTASection() {
    return (
        <div className="card relative overflow-hidden p-8 text-center md:p-14">
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                    background:
                        "radial-gradient(600px 240px at 50% -20%, rgba(124,58,237,.22), transparent 60%)",
                }}
            />
            <div className="relative">
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                    Let&apos;s build something that ships.
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-ink-2">
                    Product strategy, architecture, RevOps — the whole stack. Tell me what you
                    are building and where it needs to go.
                </p>
                <div className="mt-7 flex justify-center">
                    <Link
                        href="/contact"
                        className={buttonClasses({ variant: "primary-grad", size: "lg" })}
                    >
                        Get in touch
                    </Link>
                </div>
            </div>
        </div>
    );
}
