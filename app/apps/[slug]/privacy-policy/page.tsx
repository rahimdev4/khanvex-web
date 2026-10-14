import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedApp, publishedApps } from "@/data/apps";

type PolicyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedApps
    .filter((app) => app.privacyPolicy)
    .map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: PolicyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getPublishedApp(slug);
  if (!app?.privacyPolicy) return { title: "Policy not found", robots: { index: false } };

  return {
    title: `${app.name} Privacy Policy`,
    description: `Privacy policy for ${app.name}, published by Khanvex.`,
    alternates: { canonical: `/apps/${app.slug}/privacy-policy` },
  };
}

export default async function AppPrivacyPolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;
  const app = getPublishedApp(slug);
  if (!app?.privacyPolicy) notFound();

  return (
    <article className="section legal-document shell reading-width">
      <p className="eyebrow">{app.name}</p>
      <h1>Privacy policy</h1>
      <p className="legal-updated">Last updated: {app.privacyPolicy.lastUpdated}</p>
      <p className="legal-introduction">{app.privacyPolicy.introduction}</p>
      <nav className="legal-nav" aria-label="Privacy policy sections">
        <p>On this page</p>
        {app.privacyPolicy.sections.map((section, index) => (
          <a href={`#section-${index + 1}`} key={section.heading}>{section.heading}</a>
        ))}
      </nav>
      {app.privacyPolicy.sections.map((section, index) => (
        <section id={`section-${index + 1}`} key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
      ))}
    </article>
  );
}
