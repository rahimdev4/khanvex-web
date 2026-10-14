import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";

export function Cta() {
  return (
    <section className="section cta-section">
      <div className="shell cta-card">
        <div>
          <p className="eyebrow">Contact Khanvex</p>
          <h2>Questions about a product or publishing enquiry?</h2>
          <p>
            Use the contact page for company enquiries, or visit support for
            help with a Khanvex application.
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
