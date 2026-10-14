import { ArrowIcon } from "@/components/arrow-icon";
import type { StoreLink } from "@/data/apps";

type StoreLinksProps = {
  links: readonly StoreLink[];
  compact?: boolean;
};

export function StoreLinks({ links, compact = false }: StoreLinksProps) {
  return (
    <div className="store-links" aria-label="Download options">
      {links.map((link) => (
        <a
          className={compact ? "store-link store-link-compact" : "store-link"}
          href={link.href}
          key={link.store}
          rel="noreferrer"
          target="_blank"
        >
          <span>
            <small>Download on</small>
            <strong>{link.store}</strong>
          </span>
          <ArrowIcon />
        </a>
      ))}
    </div>
  );
}
