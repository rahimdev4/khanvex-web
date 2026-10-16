import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublicApp, publicApps } from "@/data/apps";
import { createPageMetadata } from "@/lib/metadata";

type DeleteAccountPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return publicApps
    .filter((app) => app.accountDeletion)
    .map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: DeleteAccountPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getPublicApp(slug);
  if (!app?.accountDeletion) return { title: "Instructions not found", robots: { index: false } };

  return createPageMetadata({
    title: `Delete your ${app.name} account`,
    description: `Account deletion instructions for ${app.name}.`,
    path: `/apps/${app.slug}/delete-account`,
    index: false,
  });
}

export default async function DeleteAccountPage({ params }: DeleteAccountPageProps) {
  const { slug } = await params;
  const app = getPublicApp(slug);
  if (!app?.accountDeletion) notFound();

  return (
    <article className="section legal-document shell reading-width">
      <p className="eyebrow">{app.name} support</p>
      <h1>Delete your account</h1>
      {app.accountDeletion.status === "provisional" ? (
        <p className="legal-notice">
          Provisional notice: an operational account-deletion process has not yet been verified.
        </p>
      ) : null}
      <p className="legal-introduction">{app.accountDeletion.introduction}</p>
      {app.accountDeletion.status === "operational" ? (
        <ol className="deletion-steps">
          {app.accountDeletion.steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      ) : null}
      {app.accountDeletion.contactEmail ? (
        <p className="legal-support-note">
          Need help? Email <a href={`mailto:${app.accountDeletion.contactEmail}`}>{app.accountDeletion.contactEmail}</a>.
        </p>
      ) : null}
    </article>
  );
}
