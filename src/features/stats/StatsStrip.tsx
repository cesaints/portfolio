"use client";
import StatTile from "@shared/ui/StatTile";
import Reveal from "@shared/ui/Reveal";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function StatsStrip() {
    const { t } = useI18n();
    return (
        <div className="border-y border-line">
            <ul
                role="list"
                className="container-std grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x"
            >
                {t.stats.map((s, i) => (
                    <li key={s.label}>
                        <Reveal delay={i * 0.08}>
                            <StatTile value={s.value} label={s.label} />
                        </Reveal>
                    </li>
                ))}
            </ul>
        </div>
    );
}
