// Content strings for the ByteThreads website
export const strings = {
  // Site metadata
  site: {
    title: "ByteThreads - Official Website",
    description: "Welcome to ByteThreads - Your digital solutions partner",
  },

  // Header/Navigation
  header: {
    logoAlt: "ByteThreads",
    brandName: "ByteThreads",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
  },

  // Hero section
  hero: {
    mainHeading: "Today's dreams, Tomorrow's reality",
    subHeading: "Crafting the future one moment at a time",
    ctaButton: "Get Started",
    videoFallback: "Your browser does not support the video tag.",
  },

  // Page sections
  sections: {
    scrollDemo: {
      heading: "Scroll to see the header effect!",
      description: "The header becomes transparent when you scroll.",
    },
    moreContent: {
      heading: "More Content",
      description: "Keep scrolling to test the floating header behavior.",
    },
  },

  // Status messages
  status: {
    projectCreated: "✅ Project structure created",
    headerEffect: "✅ Floating header with scroll effect",
    videoBackground: "✅ Video background hero section",
    stringsImplemented: "✅ Centralized string management",
  },
} as const;

// Type for string keys (for TypeScript safety)
export type StringKey = keyof typeof strings;