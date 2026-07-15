"use client";
import StatTile from "@shared/ui/StatTile";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function StatsStrip() {
    const { t } = useI18n();
    return (
        <ul
            role="list"
            className="container-std grid grid-cols-2 divide-line border-y border-line md:grid-cols-4 md:divide-x"
        >
            {t.stats.map((s) => (
                <li key={s.label}>
                    <StatTile value={s.value} label={s.label} />
                </li>
            ))}
        </ul>
    );
}
