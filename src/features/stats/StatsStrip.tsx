import StatTile from "@shared/ui/StatTile";
import { stats } from "./data";

export default function StatsStrip() {
    return (
        <ul
            role="list"
            className="container-std grid grid-cols-2 divide-line border-y border-line md:grid-cols-4 md:divide-x"
        >
            {stats.map((s) => (
                <li key={s.label}>
                    <StatTile value={s.value} label={s.label} />
                </li>
            ))}
        </ul>
    );
}
