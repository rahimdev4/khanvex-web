import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";

export function Cta() {
  return (
    <section className="section cta-section">
      <div className="shell cta-card">
        <div>
          <p className="eyebrow">Contact Khanvex</p>
          <h2>Questions about Khanvex or one of our apps?</h2>
          <p>
            Use our single monitored channel for company enquiries, product
            feedback, privacy requests, or application support.
          </p>
        </div>
        <Link className="button button-light" href="/contact">
          Contact Khanvex
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
