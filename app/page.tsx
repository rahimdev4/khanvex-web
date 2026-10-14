import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { Cta } from "@/components/cta";

const principles = [
  {
    number: "01",
    title: "Real needs first",
    copy: "We start with the everyday problem, then remove everything that gets in the way of solving it.",
  },
  {
    number: "02",
    title: "Clarity in every tap",
    copy: "Straightforward flows and careful language make our products feel familiar from the first use.",
  },
  {
    number: "03",
    title: "Built to keep earning trust",
    copy: "We value accessibility, respectful defaults, and steady improvement over attention-grabbing shortcuts.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Independent app studio</p>
            <h1>Apps for better everyday experiences.</h1>
            <p className="hero-lede">
              Khanvex creates thoughtful mobile apps around real needs—clear to
              use, considered in every detail, and made to stay useful.
            </p>
            <div className="button-row">
              <Link className="button" href="/apps">
                Explore our apps
                <ArrowIcon />
              </Link>
              <Link className="text-link" href="/about">
                How we think
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="An abstract preview of a Khanvex mobile app interface">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="phone">
              <div className="phone-top">
                <span>9:41</span>
                <span className="phone-signal">● ● ●</span>
              </div>
              <div className="app-mark">K</div>
              <p className="phone-kicker">A calmer day</p>
              <p className="phone-title">Good morning.</p>
              <div className="progress-card">
                <span>Today</span>
                <strong>3 of 4</strong>
                <div className="progress-track"><span /></div>
              </div>
              <div className="mini-row"><span /><span /><span /></div>
              <div className="phone-action">Continue</div>
            </div>
            <div className="floating-card floating-card-top">
              <span className="status-dot" />
              Simple by design
            </div>
            <div className="floating-card floating-card-bottom">
              <span className="spark">✦</span>
              Made for real life
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell split-heading">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2>Technology should feel less like technology.</h2>
          </div>
          <p className="section-lede">
            The best tools quickly become part of the rhythm of a day. We design
            toward that quiet usefulness: focused products, understandable
            choices, and experiences that respect your attention.
          </p>
        </div>
      </section>

      <section className="section soft-section" aria-labelledby="principles-heading">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Why Khanvex</p>
            <h2 id="principles-heading">A thoughtful standard for every product.</h2>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-window-section">
        <div className="shell product-window">
          <div className="product-window-copy">
            <p className="eyebrow">The portfolio</p>
            <h2>Focused apps, built one meaningful problem at a time.</h2>
            <p>
              Our first products are being prepared for release. When they are
              ready, you will find verified screenshots, store links, support,
              and privacy details here—nothing vague, nothing inflated.
            </p>
            <Link className="text-link" href="/apps">
              Visit the app portfolio
              <ArrowIcon />
            </Link>
          </div>
          <div className="product-stack" aria-hidden="true">
            <div className="stack-card stack-card-back" />
            <div className="stack-card stack-card-middle" />
            <div className="stack-card stack-card-front">
              <div className="stack-icon">K</div>
              <div>
                <span>Coming next</span>
                <strong>Useful by default.</strong>
              </div>
              <div className="stack-lines"><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
