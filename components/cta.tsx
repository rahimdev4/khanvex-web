import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import styles from "./cta.module.css";

type CtaProps = {
  variant?: "default" | "home";
};

export function Cta({ variant = "default" }: CtaProps) {
  if (variant === "home") {
    return (
      <section
        className={`section cta-section ${styles.homeSection}`}
        aria-labelledby="home-contact-heading"
      >
        <div className="shell">
          <div className={styles.card}>
            <div className={styles.copy}>
              <div className={styles.topline}>
                <span className={styles.messageMark} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 17.5 3.5 21v-15A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v9a2.5 2.5 0 0 1-2.5 2.5H5Z" />
                    <path d="M8 8.5h8M8 12.5h5" />
                  </svg>
                </span>
                <p className={styles.eyebrow}>Contact Khanvex</p>
              </div>
              <h2 id="home-contact-heading">
                Good software starts with a <span>conversation.</span>
              </h2>
              <p className={styles.description}>
                Get in touch for company enquiries, product feedback, privacy
                requests, or help with an app.
              </p>
            </div>
            <div className={styles.actions}>
              <p className={styles.caption}>Company &amp; product support</p>
              <Link className={styles.contactButton} href="/contact">
                Contact Khanvex <ArrowIcon />
              </Link>
              <Link className={styles.supportLink} href="/support">
                Find app support <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
