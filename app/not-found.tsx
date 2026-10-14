import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";

export default function NotFound() {
  return (
    <section className="not-found shell reading-width">
      <p className="eyebrow">404 · Page not found</p>
      <h1>This page is not part of the plan.</h1>
      <p>The address may be outdated, or the page may have moved.</p>
      <Link className="button" href="/">
        Return home <ArrowIcon />
      </Link>
    </section>
  );
}
