// Content strings for the ByteThreads website
export const strings = {
  // Site metadata
  site: {
    title: "ByteThreads — Software, Crafted.",
    description:
      "ByteThreads LLC is a boutique software development studio specializing in .NET, iOS, and full-stack web development. Precision engineering woven into every line of code.",
  },

  // Header/Navigation
  header: {
    logoAlt: "ByteThreads",
    brandName: "ByteThreads",
    nav: {
      services: "Services",
      work: "Work",
      about: "About",
      process: "Process",
      contact: "Contact",
    },
  },

  // Hero section
  hero: {
    headline: "Software, crafted.",
    description:
      "ByteThreads is a boutique development studio that weaves precision engineering into .NET backends, native iOS apps, and modern web experiences.",
    cta: "Start a Conversation",
  },

  // Services section
  services: {
    label: "What I Do",
    headline: "Four pillars of engineering excellence",
    items: [
      {
        title: ".NET & Backend",
        description:
          "Enterprise APIs, microservices, and cloud-native architectures built on the Microsoft stack. Scalable, secure, production-hardened.",
        icon: "dotnet",
      },
      {
        title: "iOS Apps",
        description:
          "Native Swift and SwiftUI applications designed for performance and delight. From concept through App Store launch.",
        icon: "ios",
      },
      {
        title: "Full-Stack Web",
        description:
          "Modern web applications with React, Next.js, SvelteKit, and Tailwind. Responsive, accessible, and fast.",
        icon: "web",
      },
      {
        title: "AI & Automation",
        description:
          "Intelligent features powered by machine learning, from computer vision to natural language processing and workflow automation.",
        icon: "ai",
      },
    ],
  },

  // About section
  about: {
    label: "The Studio",
    headline: "A studio, not a factory.",
    philosophy:
      "I started ByteThreads because I believe great software comes from focused, dedicated craft, not assembly lines. Every project gets my full attention, and you work directly with the engineer building your product. No hand-offs, no layers of abstraction.",
    differentiators: [
      {
        title: "Direct Engineer Access",
        description:
          "You work directly with the person building your product. No project managers translating your vision through three layers of abstraction.",
      },
      {
        title: "Boutique Advantage",
        description:
          "Small enough to be nimble, experienced enough to be reliable. Fewer projects means each one gets the attention it deserves.",
      },
      {
        title: "Full Lifecycle",
        description:
          "From architecture and design through deployment and ongoing support. I don\u2019t disappear after launch. I\u2019m invested in your success.",
      },
    ],
  },

  // Work / Portfolio section
  work: {
    label: "What I\u2019ve Built",
    headline: "Projects that speak for themselves",
    projects: [
      {
        name: "Open Studio Flow",
        description:
          "All-in-one project management platform for interior designers, architects, landscape designers, and design studios. Client approvals, budget tracking, FF&E selections, AI-transcribed voice notes, and a native iOS companion app — with free access for clients and contractors.",
        techStack: ["SvelteKit", "Supabase", "Cloudflare", "Swift", "Stripe"],
        link: "https://openstudioflow.com",
        linkLabel: "Visit Open Studio Flow",
      },
      {
        name: "Smart Property Check",
        description:
          "AI-powered iOS inspection app for property managers, inspectors, and landlords. Record a video walkthrough, let AI detect issues and draft the report, then sign and export a branded PDF — offline-capable, with iCloud sync across iPhone and iPad.",
        techStack: ["SwiftUI", "CloudKit", "StoreKit 2", "OpenAI", "AssemblyAI"],
        link: "https://www.smartpropertycheck.com",
        linkLabel: "Visit Smart Property Check",
      },
      {
        name: "Showly",
        description:
          "Showing platform for real estate agents: instant booking links replace phone tag, buyers leave structured feedback after every showing, and sellers follow along on a live owner report. Web dashboard plus a native iOS app, for solo agents through 25-agent brokerages.",
        techStack: ["Next.js", "Firebase", "SwiftUI", "Stripe", "Twilio"],
        link: "https://www.showly.io",
        linkLabel: "Visit Showly",
      },
    ],
  },

  // Process section
  process: {
    label: "How I Work",
    headline: "From first conversation to long-term partnership",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description:
          "Listening comes before building. A deep-dive into your goals, users, and constraints to define the right scope.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Architecture, wireframes, and technical planning. You see the blueprint before a single line of code is written.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Iterative development with regular demos. You\u2019re never in the dark about progress or direction.",
      },
      {
        number: "04",
        title: "Launch",
        description:
          "Rigorous testing, performance tuning, and deployment. Every detail is sweated so your users don\u2019t have to.",
      },
      {
        number: "05",
        title: "Support",
        description:
          "Ongoing maintenance, monitoring, and iteration. Your product evolves as your business grows.",
      },
    ],
  },

  // Tech stack section
  techStack: {
    label: "The Toolkit",
    headline: "Technologies I trust",
    items: [
      ".NET",
      "C#",
      "ASP.NET Core",
      "Swift",
      "SwiftUI",
      "Core ML",
      "React",
      "Next.js",
      "TypeScript",
      "SvelteKit",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Azure",
      "Docker",
      "GraphQL",
      "REST APIs",
    ],
  },

  // CTA section
  cta: {
    headline: "Ready to build something?",
    description:
      "Tell me about your project. I\u2019ll get back to you within one business day.",
    button: "Start a Conversation",
  },

  // Contact page
  contact: {
    title: "Let\u2019s Talk",
    subtitle:
      "Have a project in mind? Tell me about it and I\u2019ll get back to you within one business day.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "What can I help with?",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      submitButton: "Send Message",
      submitting: "Sending...",
      successMessage:
        "Message sent successfully! I\u2019ll get back to you soon.",
      errorMessage: "Failed to send message. Please try again.",
    },
    info: {
      email: {
        label: "Email",
        value: "contact@bytethreadsllc.com",
      },
      location: {
        label: "Location",
        value: "Minnesota, USA",
      },
    },
  },

  // Footer
  footer: {
    tagline: "Software, crafted with care.",
    nav: {
      services: "Services",
      work: "Work",
      about: "About",
      process: "Process",
    },
    external: {
      openStudioFlow: {
        label: "Open Studio Flow",
        link: "https://openstudioflow.com",
      },
      smartPropertyCheck: {
        label: "Smart Property Check",
        link: "https://www.smartpropertycheck.com",
      },
      showly: {
        label: "Showly",
        link: "https://www.showly.io",
      },
    },
    contact: {
      email: "contact@bytethreadsllc.com",
      location: "Minnesota, USA",
    },
    copyright: "ByteThreads LLC. All rights reserved.",
  },
} as const;

// Type for string keys (for TypeScript safety)
export type StringKey = keyof typeof strings;
