export type AppPlatform = "iOS" | "Android";
export type StoreName = "App Store" | "Google Play";

export type AppAsset = {
  src: string;
  alt: string;
  label?: string;
  width: number;
  height: number;
};

export type StoreLink = {
  store: StoreName;
  href: string;
};

export type AppFeature = {
  title: string;
  description: string;
  screenshotIndex: number;
};

export type AppBenefit = {
  title: string;
  description: string;
};

export type AppFaq = {
  question: string;
  answer: string;
};

export type LegalSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type AppPrivacyPolicy = {
  status: "provisional" | "final";
  lastUpdated: string;
  introduction: string;
  sections: readonly LegalSection[];
};

export type AccountDeletionGuide = {
  status: "provisional" | "operational";
  introduction: string;
  steps: readonly string[];
  contactEmail?: string;
};

export type AppEntry = {
  slug: string;
  name: string;
  category: string;
  packageName: string;
  summary: string;
  description: string;
  headline: string;
  seoTitle: string;
  seoDescription: string;
  platforms: readonly AppPlatform[];
  status: "draft" | "pre-release" | "published";
  publicContentApproved: boolean;
  storeListingStatus: "unavailable" | "available";
  legalStatus: "provisional" | "ready";
  featured: boolean;
  accentColor: string;
  accentTint: string;
  icon: AppAsset;
  screenshots: readonly AppAsset[];
  storeLinks: readonly StoreLink[];
  features: readonly AppFeature[];
  benefits: readonly AppBenefit[];
  faqs: readonly AppFaq[];
  supportEmail: string;
  supportEmailVerified: boolean;
  privacyPolicy?: AppPrivacyPolicy;
  accountDeletion?: AccountDeletionGuide;
};

// Add products here only after every public claim, asset, store URL, support
// path, and disclosure has been reviewed. Approved pre-release products may be
// previewed without being represented as released or downloadable.
export const appRegistry: readonly AppEntry[] = [
  {
    slug: "gemfit",
    name: "GemFit",
    category: "Fitness & Workouts",
    packageName: "khanex.gemfit.app",
    summary:
      "A focused Android fitness app for exploring workout routines, following exercises, organizing training, and reviewing activity.",
    description:
      "Explore guided workout routines, organize your training, follow exercises, and track your activity in one place.",
    headline: "Make every workout count.",
    seoTitle: "GemFit | Fitness & Workout App",
    seoDescription:
      "Discover GemFit, a fitness and workout app for exploring training routines, following exercises, organizing workouts, and tracking activity.",
    platforms: ["Android"],
    status: "pre-release",
    publicContentApproved: true,
    storeListingStatus: "unavailable",
    legalStatus: "provisional",
    featured: true,
    accentColor: "#9DEB00",
    accentTint: "#F1F9E4",
    icon: {
      src: "/apps/gemfit/gemfit-icon.webp",
      alt: "GemFit app icon with a geometric green G on dark navy",
      width: 1254,
      height: 1254,
    },
    screenshots: [
      {
        src: "/apps/gemfit/gemfit-home.webp",
        alt: "GemFit home dashboard showing a scheduled workout, training setup, and weekly activity",
        label: "Home dashboard",
        width: 841,
        height: 1870,
      },
      {
        src: "/apps/gemfit/gemfit-workouts.webp",
        alt: "GemFit workout library with search, filters, and workout plans",
        label: "Workout library",
        width: 841,
        height: 1870,
      },
      {
        src: "/apps/gemfit/gemfit-workout-details.webp",
        alt: "GemFit workout detail page describing a dumbbell shoulder routine",
        label: "Workout details",
        width: 841,
        height: 1870,
      },
      {
        src: "/apps/gemfit/gemfit-exercise-video.webp",
        alt: "GemFit exercise guidance page with cues, muscle focus, equipment, and difficulty",
        label: "Exercise guidance",
        width: 841,
        height: 1870,
      },
      {
        src: "/apps/gemfit/gemfit-plan.webp",
        alt: "GemFit training plan showing progress and upcoming sessions",
        label: "Training plan",
        width: 841,
        height: 1870,
      },
      {
        src: "/apps/gemfit/gemfit-active-workout.webp",
        alt: "GemFit active workout screen with set progress, rest timing, and session controls",
        label: "Active workout",
        width: 841,
        height: 1870,
      },
      {
        src: "/apps/gemfit/gemfit-progress.webp",
        alt: "GemFit activity screen with weekly workout totals and completed session history",
        label: "Activity history",
        width: 841,
        height: 1870,
      },
      {
        src: "/apps/gemfit/gemfit-profile.webp",
        alt: "GemFit profile screen with training preferences and session goals",
        label: "Training profile",
        width: 841,
        height: 1870,
      },
    ],
    storeLinks: [],
    features: [
      {
        title: "Find a workout that fits your routine.",
        description:
          "Browse workout plans and exercises, use the available search and filters, and open a routine that matches the way you want to train.",
        screenshotIndex: 1,
      },
      {
        title: "Know your workout before you start.",
        description:
          "Review a routine’s structure, training frequency, duration, requirements, and focus before adding it to your plan.",
        screenshotIndex: 2,
      },
      {
        title: "Exercise guidance when you need it.",
        description:
          "Read clear exercise cues alongside muscle focus, equipment, difficulty, and available exercise media.",
        screenshotIndex: 3,
      },
      {
        title: "Keep your training organized.",
        description:
          "Follow a structured plan, see upcoming sessions, and keep completed and remaining work easy to understand.",
        screenshotIndex: 4,
      },
      {
        title: "Stay focused during every session.",
        description:
          "Move through exercises and sets with visible rest timing, session controls, and workout progress.",
        screenshotIndex: 5,
      },
      {
        title: "See the work you’ve completed.",
        description:
          "Review weekly activity, completed workout time, and the history of recorded training sessions.",
        screenshotIndex: 6,
      },
    ],
    benefits: [
      {
        title: "Discover",
        description: "Browse routines and exercises in one focused library.",
      },
      {
        title: "Prepare",
        description: "Review exercise guidance and workout requirements.",
      },
      {
        title: "Plan",
        description: "Organize planned training sessions.",
      },
      {
        title: "Train",
        description: "Follow sets, rest periods, and session progress.",
      },
      {
        title: "Review",
        description: "Review completed workouts and weekly activity.",
      },
    ],
    faqs: [
      {
        question: "What can I do in GemFit?",
        answer:
          "GemFit brings together workout browsing, exercise guidance, training plans, active workout tracking, and completed activity history.",
      },
      {
        question: "Which platform is GemFit being prepared for?",
        answer:
          "GemFit is being prepared for Android. An official Google Play link will be added only after the listing is available and verified.",
      },
      {
        question: "Can I download GemFit now?",
        answer:
          "Not through this website yet. GemFit is in pre-release and Khanvex has not published a verified Google Play URL.",
      },
    ],
    supportEmail: "support@khanvex.tech",
    supportEmailVerified: false,
    privacyPolicy: {
      status: "provisional",
      lastUpdated: "October 15, 2026",
      introduction:
        "GemFit’s app-specific privacy disclosures are still being verified. This provisional page is not the final privacy policy.",
      sections: [
        {
          heading: "Current status",
          paragraphs: [
            "The app’s data practices are under review. This page does not yet make final claims about data collection, retention, processors, authentication, or account handling.",
          ],
        },
        {
          heading: "Before publication",
          paragraphs: [
            "Khanvex will replace this notice after GemFit’s actual data flows and required disclosures have been verified.",
          ],
        },
      ],
    },
    accountDeletion: {
      status: "provisional",
      introduction:
        "GemFit account-deletion availability and instructions have not yet been verified. This route is reserved for the final process and does not currently represent an operational deletion method.",
      steps: [],
    },
  },
];

function hasApprovedPublicContent(app: AppEntry) {
  return (
    app.status !== "draft" &&
    app.publicContentApproved &&
    app.icon.src.length > 0 &&
    app.screenshots.length > 0 &&
    app.features.length > 0 &&
    app.benefits.length > 0 &&
    app.faqs.length > 0
  );
}

function hasReleaseReadiness(app: AppEntry) {
  return (
    app.status === "published" &&
    app.storeListingStatus === "available" &&
    app.storeLinks.length > 0 &&
    app.supportEmailVerified &&
    app.legalStatus === "ready" &&
    app.privacyPolicy?.status === "final"
  );
}

export const publicApps = appRegistry.filter(hasApprovedPublicContent);
export const publishedApps = publicApps.filter(hasReleaseReadiness);
export const featuredApps = publicApps.filter((app) => app.featured);

export function getPublicApp(slug: string) {
  return publicApps.find((app) => app.slug === slug);
}

export function getPublishedApp(slug: string) {
  return publishedApps.find((app) => app.slug === slug);
}
