import Reveal from "@shared/ui/Reveal";
import { valueProps } from "./data";

export default function ValueProps() {
    return (
        <div className="grid gap-5 sm:grid-cols-2">
            {valueProps.map((v, i) => {
                const Icon = v.icon;
                return (
                    <Reveal key={v.title} delay={i * 0.05}>
                        <div className="card h-full p-6 md:p-8">
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-violet-400">
                                <Icon className="h-5 w-5" aria-hidden />
                            </span>
                            <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                                {v.title}
                            </h3>
                            <p className="mt-2 text-ink-2">{v.body}</p>
                        </div>
                    </Reveal>
                );
            })}
        </div>
    );
}
