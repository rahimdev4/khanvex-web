import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";

export function Cta() {
  return (
    <section className="section cta-section">
      <div className="shell cta-card">
        <div>
          <p className="eyebrow">Build thoughtfully</p>
          <h2>Better apps begin with better questions.</h2>
          <p>
            Have a product idea, a support question, or a reason to collaborate?
            We would like to hear it.
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
