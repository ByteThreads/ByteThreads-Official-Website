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
    subHeading: "Crafting digital solutions one moment at a time",
    ctaButton: "Get Started",
    videoFallback: "Your browser does not support the video tag.",
  },

  // Page sections
  sections: {
    threads: [
      {
        title: "Innovation",
        description: "Pioneering cutting-edge solutions that push the boundaries of what's possible in digital technology.",
      },
      {
        title: "Collaboration",
        description: "Working together to weave your vision into reality, creating seamless connections between ideas and execution.",
      },
      {
        title: "Excellence",
        description: "Delivering exceptional quality in every thread of code, design, and strategy that we craft.",
      },
      {
        title: "Growth",
        description: "Empowering your business to scale and evolve through powerful digital experiences.",
      },
    ],
    gallery: {
      heading: "Digital Solutions",
      description: "Transforming ideas into powerful digital experiences",
    },
    moreContent: {
      heading: "More Content",
      description: "Keep scrolling to test the floating header behavior.",
    },
    features: [
      {
        id: "exclusive",
        letter: "B",
        title: "Exclusive Approach",
        description: "Each project is like a unique work of art, and we immerse ourselves in your vision to achieve a truly exceptional result.",
      },
      {
        id: "unique",
        letter: "Y",
        title: "Unique Style",
        description: "We give each project a unique look that reflects your brand's personality. Our goal is to create an eye-catching visual experience that will help you stand out from the crowd.",
      },
      {
        id: "comprehensive",
        letter: "T",
        title: "Comprehensive Development",
        description: "Everything is turnkey — from the idea to launch. We handle every stage of the process so that you receive a fully finished product.",
      },
      {
        id: "competitive",
        letter: "E",
        title: "Competitive Analysis",
        description: "We analyze the strengths and weaknesses of your competitors, identify current trends, and offer solutions that will make your project stand out and give you a competitive advantage.",
      },
    ],
  },

  // Contact page
  contact: {
    title: "Get in Touch",
    subtitle: "Have a project in mind? Let's talk about how we can help bring your ideas to life.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "How can we help?",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your project...",
      submitButton: "Send Message",
      submitting: "Sending...",
      successMessage: "Message sent successfully! We'll get back to you soon.",
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