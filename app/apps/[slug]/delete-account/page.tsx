import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedApp, publishedApps } from "@/data/apps";

type DeleteAccountPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedApps
    .filter((app) => app.accountDeletion)
    .map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: DeleteAccountPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getPublishedApp(slug);
  if (!app?.accountDeletion) return { title: "Instructions not found", robots: { index: false } };

  return {
    title: `Delete your ${app.name} account`,
    description: `Account deletion instructions for ${app.name}.`,
    alternates: { canonical: `/apps/${app.slug}/delete-account` },
    robots: { index: false, follow: true },
  };
}

export default async function DeleteAccountPage({ params }: DeleteAccountPageProps) {
  const { slug } = await params;
  const app = getPublishedApp(slug);
  if (!app?.accountDeletion) notFound();

  return (
    <article className="section legal-document shell reading-width">
      <p className="eyebrow">{app.name} support</p>
      <h1>Delete your account</h1>
      <p className="legal-introduction">{app.accountDeletion.introduction}</p>
      <ol className="deletion-steps">
        {app.accountDeletion.steps.map((step) => <li key={step}>{step}</li>)}
      </ol>
      {app.accountDeletion.contactEmail ? (
        <p className="legal-support-note">
          Need help? Email <a href={`mailto:${app.accountDeletion.contactEmail}`}>{app.accountDeletion.contactEmail}</a>.
        </p>
      ) : null}
    </article>
  );
}
