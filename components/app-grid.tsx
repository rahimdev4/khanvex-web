import { AppCard } from "@/components/app-card";
import type { AppEntry } from "@/data/apps";

export function AppGrid({ apps }: { apps: readonly AppEntry[] }) {
  return (
    <div className={`app-grid${apps.length === 1 ? " app-grid-single" : ""}`}>
      {apps.map((app) => (
        <AppCard app={app} key={app.slug} />
      ))}
    </div>
  );
}
