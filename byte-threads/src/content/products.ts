// Case-study content for ByteThreads product pages (/work/<slug>)
// Facts here mirror each product's live marketing site — keep in sync when
// openstudioflow.com or showly.io reposition.

export interface ProductFact {
  label: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductCaseStudy {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  /** Primary brand accent, used for labels, dots, and CTAs on the page */
  accent: string;
  /** Secondary accent, used as the gradient end for the headline accent */
  accentSecondary: string;
  siteUrl: string;
  siteLabel: string;
  appStoreUrl: string;
  facts: ProductFact[];
  overview: {
    heading: string;
    paragraphs: string[];
  };
  features: {
    heading: string;
    subheading: string;
    items: ProductFeature[];
  };
  ios: {
    heading: string;
    body: string;
  };
  engineering: {
    heading: string;
    body: string;
    stack: string[];
  };
  nextCaseStudy: {
    name: string;
    href: string;
  };
  meta: {
    title: string;
    description: string;
  };
  jsonLd: {
    category: string;
    price: string;
  };
}

export const openStudioFlow: ProductCaseStudy = {
  slug: 'open-studio-flow',
  name: 'Open Studio Flow',
  eyebrow: 'Case Study — SaaS Platform',
  headline: 'Design projects, managed',
  headlineAccent: 'beautifully.',
  subheadline:
    'Open Studio Flow is an all-in-one project management platform for interior designers, architects, landscape designers, and design studios — files, client approvals, budgets, selections, and on-site capture in one place.',
  accent: '#7A9E8E',
  accentSecondary: '#8FB5A3',
  siteUrl: 'https://openstudioflow.com',
  siteLabel: 'openstudioflow.com',
  appStoreUrl: 'https://apps.apple.com/us/app/open-studio-flow/id6760516729',
  facts: [
    { label: 'Status', value: 'Live' },
    { label: 'Platforms', value: 'Web · iOS' },
    { label: 'Languages', value: 'EN · ES · FR · DE' },
    { label: 'Pricing', value: 'Free plan · from $19/mo' },
  ],
  overview: {
    heading: 'One home for the whole project',
    paragraphs: [
      'Design projects scatter across email threads, spreadsheets, shared drives, and text messages. Open Studio Flow pulls all of it into one place, built specifically for how interior designers, architects, landscape designers, event designers, and design studios actually work. Designers pay per seat; clients and contractors join free with no limit, so the whole project team actually uses it.',
      'From first consultation to final installation, everything lives on the project: milestones and tasks, shared files with visibility controls, real-time messaging, client approvals, budgets with markup, and a selections board that tracks every tile, fixture, and fabric from research to install.',
    ],
  },
  features: {
    heading: 'What it does',
    subheading:
      'Everything a design studio needs from first consultation to final completion.',
    items: [
      {
        title: 'Project management',
        description:
          'Milestones, tasks, and assignments keep contractors and clients aligned from concept to completion.',
      },
      {
        title: 'Files & storage',
        description:
          'Floor plans, mood boards, renderings, and spec sheets, organized by folder with per-audience visibility controls.',
      },
      {
        title: 'Client approvals',
        description:
          'Send selections for review and track what is approved, what needs revision, and what is pending — clients approve from mobile.',
      },
      {
        title: 'Budget tracking',
        description:
          'Per-project budgets with categories, markup, and a client-visible view, plus PDF export.',
      },
      {
        title: 'Selections tracker',
        description:
          'Every FF&E selection — tile, cabinetry, fixtures, furniture — moves from research to installation on a visual Kanban board, with alerts when a product is discontinued.',
      },
      {
        title: 'Consultation booking',
        description:
          'A shareable booking page lets clients pick a meeting type and an open slot: site visits, walkthroughs, and consultations scheduled in seconds.',
      },
      {
        title: 'Voice notes & AI transcription',
        description:
          'Site-walkthrough voice memos are transcribed into searchable text with speaker labels, so no detail gets lost.',
      },
      {
        title: 'Guest share links',
        description:
          'Share files, selections, or messages with anyone — realtors, vendors, quick-look clients — no account needed.',
      },
    ],
  },
  ios: {
    heading: 'A design studio in your pocket',
    body: 'The native iOS companion app is built for on-site capture: photos, voice memos, and notes straight from the job site. Contractors and clients can capture too, and everything syncs to the project instantly.',
  },
  engineering: {
    heading: 'Under the hood',
    body: 'The web app is SvelteKit 2 with Svelte 5 runes, deployed on Cloudflare Pages with a set of Workers handling webhooks, cron jobs, and image thumbnails. Supabase provides Postgres with row-level security, auth, and realtime sync; files live in Cloudflare R2 behind presigned uploads. Billing runs through Stripe on the web and Apple in-app purchase on iOS, voice memos are transcribed with AssemblyAI, and the whole product ships in four languages.',
    stack: [
      'SvelteKit',
      'Svelte 5',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Cloudflare',
      'Stripe',
      'Swift',
      'SwiftUI',
      'AssemblyAI',
    ],
  },
  nextCaseStudy: {
    name: 'Showly',
    href: '/work/showly',
  },
  meta: {
    title: 'Open Studio Flow — Design Project Management',
    description:
      'Case study: Open Studio Flow, an all-in-one project management platform for interior designers, architects, and design studios. Designed, engineered, and maintained by ByteThreads LLC.',
  },
  jsonLd: {
    category: 'BusinessApplication',
    price: '0',
  },
};

export const showly: ProductCaseStudy = {
  slug: 'showly',
  name: 'Showly',
  eyebrow: 'Case Study — SaaS Platform',
  headline: 'Simpler scheduling.',
  headlineAccent: 'Smarter reporting.',
  subheadline:
    'Showly lets real estate clients book showings instantly, collects buyer feedback automatically, and keeps sellers informed with a live owner report that updates every time the agent does.',
  accent: '#60A5FA',
  accentSecondary: '#34D399',
  siteUrl: 'https://www.showly.io',
  siteLabel: 'showly.io',
  appStoreUrl: 'https://apps.apple.com/app/id6785987384',
  facts: [
    { label: 'Status', value: 'Live' },
    { label: 'Platforms', value: 'Web · iOS' },
    { label: 'Trial', value: '30 days · no card' },
    { label: 'Pricing', value: 'From $29/mo' },
  ],
  overview: {
    heading: 'From booked showing to informed seller',
    paragraphs: [
      'Scheduling a property showing usually means phone tag — and sellers wondering whether anyone toured their home this week. Showly gives every property an instant booking link: clients pick a time that works, with no app download and no login, and the agent simply gets notified. Reminders go out automatically by email and SMS.',
      'Then Showly closes the loop. Every buyer gets a polished feedback form after their showing; the agent reviews responses, approves what matters, and the seller’s live report — a shareable, no-login page with showings, buyer sentiment, price feedback, and two-way messaging — updates on its own. Sales listings and rentals work side by side, from solo agents up to 25-agent brokerages.',
    ],
  },
  features: {
    heading: 'What it does',
    subheading:
      'Everything an agent needs to run better showings and keep owners in the loop.',
    items: [
      {
        title: 'Instant booking links',
        description:
          'A unique link for each property, created in seconds and shareable anywhere — iMessage, social, email, or a yard sign.',
      },
      {
        title: 'Smart availability',
        description:
          'Agents set working hours once; clients only ever see slots that are actually open.',
      },
      {
        title: 'Email & SMS reminders',
        description:
          'Automatic reminders 24 hours and 1 hour before each showing, with client self-service rescheduling.',
      },
      {
        title: 'Buyer feedback',
        description:
          'Polished post-showing feedback forms capture interest level and price perception — the agent approves what reaches the owner.',
      },
      {
        title: 'Live owner reports',
        description:
          'A no-login report page shows sellers every showing, sentiment trends, and agent notes, with two-way messaging built in.',
      },
      {
        title: 'QR codes for yard signs',
        description:
          'Printable QR codes link straight to the booking page — perfect for signs, flyers, and open house tables.',
      },
      {
        title: 'Open house mode',
        description:
          'QR sign-in pages track attendees and trigger follow-up emails after the event.',
      },
      {
        title: 'Teams & brokerages',
        description:
          'Shared workspaces, office-wide branding, and per-agent performance reporting scale from 2 agents to a 25-agent office.',
      },
    ],
  },
  ios: {
    heading: 'A whole day of showings, in your pocket',
    body: 'Showings, listings, and owner conversations — the same Showly agents run from their desk, built native for iPhone with push notifications, route optimization, and a color-coded team calendar.',
  },
  engineering: {
    heading: 'Under the hood',
    body: 'The web app is Next.js on Vercel with Firebase underneath — Firestore, Auth, Storage, and push messaging. Stripe handles web billing alongside Apple in-app purchase on iOS; Twilio powers SMS reminders and Resend delivers branded email. The native SwiftUI iPhone app shares the same Firestore backend, so a booking made on the web appears on the agent’s phone in real time.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'Stripe',
      'Twilio',
      'Resend',
      'Swift',
      'SwiftUI',
    ],
  },
  nextCaseStudy: {
    name: 'Smart Property Check',
    href: '/work/smart-property-check',
  },
  meta: {
    title: 'Showly — Real Estate Showings & Owner Reports',
    description:
      'Case study: Showly, the showing scheduling, buyer feedback, and owner reporting platform for real estate agents. Designed, engineered, and maintained by ByteThreads LLC.',
  },
  jsonLd: {
    category: 'BusinessApplication',
    price: '29',
  },
};

export const smartPropertyCheck: ProductCaseStudy = {
  slug: 'smart-property-check',
  name: 'Smart Property Check',
  eyebrow: 'Case Study — iOS App',
  headline: 'Record the walkthrough.',
  headlineAccent: 'AI writes the report.',
  subheadline:
    'Smart Property Check is an AI-powered iOS inspection app for property managers, inspectors, and landlords: record a video walkthrough, let AI detect issues and draft the report, then sign and export a branded PDF.',
  accent: '#5E80FF',
  accentSecondary: '#8C5EFF',
  siteUrl: 'https://www.smartpropertycheck.com',
  siteLabel: 'smartpropertycheck.com',
  appStoreUrl: 'https://apps.apple.com/us/app/smart-property-check/id6754345916',
  facts: [
    { label: 'Status', value: 'Live' },
    { label: 'Platform', value: 'iOS — iPhone & iPad' },
    { label: 'Trial', value: '7 days · no card' },
    { label: 'Pricing', value: 'From $29/mo' },
  ],
  overview: {
    heading: 'From walkthrough to signed report',
    paragraphs: [
      'A property inspection usually means hours of note-taking and photo sorting, then an evening spent writing the report. Smart Property Check compresses that into the walkthrough itself: the inspector records video and narrates naturally, the app transcribes the narration, and AI reviews the footage for damage, wear, stains, and maintenance issues.',
      'Visual findings and narration are combined into a professional, client-ready report draft the inspector reviews, edits, and signs together with the tenant, then exports as a branded PDF. Capture works fully offline — basements, garages, rural properties — and syncs through iCloud when back online. Plans run from a Starter tier for individual landlords to an unlimited Solo plan, all with a 7-day free trial.',
    ],
  },
  features: {
    heading: 'What it does',
    subheading:
      'Every feature is aimed at cutting hours off the inspection workflow.',
    items: [
      {
        title: 'AI video analysis',
        description:
          'Record a walkthrough and AI reviews the frames for damage, wear, stains, cracks, and maintenance needs.',
      },
      {
        title: 'Voice transcription',
        description:
          'Narrate naturally while walking the property — narration is transcribed automatically, with no post-inspection typing.',
      },
      {
        title: 'AI report generation',
        description:
          'Visual findings and voice notes are combined into a professional, client-ready report draft in seconds.',
      },
      {
        title: 'Photos & video by room',
        description:
          'Time-stamped photos and HD video, organized room by room as the inspection happens.',
      },
      {
        title: 'Digital signatures',
        description:
          'Inspector and tenant sign on-device with timestamps, embedded directly in the final PDF.',
      },
      {
        title: 'Branded PDF export',
        description:
          'Reports with photos, video frames, signatures, and custom branding, shared by email or messages.',
      },
      {
        title: 'Works offline',
        description:
          'Capture everything in basements, garages, or rural properties with no signal — it syncs when you are back online.',
      },
      {
        title: 'iCloud sync',
        description:
          'CloudKit keeps every device current using the inspector’s own iCloud — no third-party accounts, no storage fees.',
      },
    ],
  },
  ios: {
    heading: 'Built native, iPhone to iPad',
    body: 'Smart Property Check is fully native SwiftUI with Apple Pencil support and an iPad-optimized layout — no web wrappers. Everything is captured on-device and synced through the user’s own iCloud, so it feels like it belongs on the platform.',
  },
  engineering: {
    heading: 'Under the hood',
    body: 'The app is native SwiftUI for iPhone and iPad, with StoreKit 2 handling subscriptions and CloudKit handling sync — ByteThreads runs no servers, so inspection data lives entirely in the user’s own iCloud. The AI pipeline pairs AssemblyAI for voice transcription with OpenAI’s GPT-4 for video-frame analysis and report drafting, with privacy guardrails built in: property addresses and tenant names are never sent to AI services, and audio is deleted after processing.',
    stack: [
      'Swift',
      'SwiftUI',
      'iPadOS',
      'CloudKit',
      'StoreKit 2',
      'OpenAI GPT-4',
      'AssemblyAI',
    ],
  },
  nextCaseStudy: {
    name: 'Open Studio Flow',
    href: '/work/open-studio-flow',
  },
  meta: {
    title: 'Smart Property Check — AI Property Inspections',
    description:
      'Case study: Smart Property Check, the AI-powered iOS property inspection app for property managers, inspectors, and landlords. Designed, engineered, and maintained by ByteThreads LLC.',
  },
  jsonLd: {
    category: 'BusinessApplication',
    price: '0',
  },
};
