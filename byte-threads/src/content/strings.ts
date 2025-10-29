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

  // Product Showcase - Smart Property Check
  product: {
    title: "Smart Property Check",
    tagline: "The First Property Inspection App with AI Video Analysis",
    description: "AI-powered iOS property inspection app that automatically detects issues, transcribes findings, and generates professional reports in seconds. Save 30-50% inspection time.",
    features: [
      {
        icon: "📱",
        title: "AI Video Analysis",
        description: "Automatically detects property issues from video. The only iOS app with breakthrough AI video technology that saves 30-50% of inspection time.",
      },
      {
        icon: "🤖",
        title: "Voice-to-Text Transcription",
        description: "Speak your findings and watch them automatically transcribe. Eliminates manual report writing and speeds up your workflow.",
      },
      {
        icon: "📊",
        title: "AI Report Generation",
        description: "Creates professional inspection reports in just 30 seconds. AI generates detailed narratives from your notes and videos automatically.",
      },
      {
        icon: "🔔",
        title: "Native iOS Performance",
        description: "Built with SwiftUI for blazing-fast performance. Fully offline functionality with iCloud sync when you're back online.",
      },
      {
        icon: "🔒",
        title: "Digital Signatures & PDF Export",
        description: "Capture client signatures digitally and export professional PDF reports instantly. Everything you need in one app.",
      },
      {
        icon: "🌐",
        title: "Unlimited Media Storage",
        description: "Take unlimited photos and videos during inspections. All stored securely and synced automatically with iCloud.",
      },
    ],
    cta: {
      text: "Learn More",
      link: "https://www.smartpropertycheck.com",
    },
  },

  // FAQ section
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about Smart Property Check",
    items: [
      {
        question: "What is Smart Property Check?",
        answer: "Smart Property Check is a comprehensive property management platform that streamlines inspections, maintenance workflows, and reporting. It uses AI-powered insights to help property managers make data-driven decisions."
      },
      {
        question: "How does the AI-powered inspection work?",
        answer: "Our AI analyzes photos and data from property inspections to automatically detect issues, predict maintenance needs, and suggest optimal maintenance schedules. This saves time and helps prevent costly repairs."
      },
      {
        question: "Can I use Smart Property Check offline?",
        answer: "Yes! Our mobile app works completely offline, allowing you to conduct inspections in areas without internet connectivity. All data automatically syncs once you're back online."
      },
      {
        question: "What types of properties can I manage?",
        answer: "Smart Property Check works with residential, commercial, and industrial properties. Our platform is flexible and can be customized to meet the specific needs of your property portfolio."
      },
      {
        question: "How secure is my data?",
        answer: "We use bank-level encryption and comply with industry standards including SOC 2 and GDPR. All data is encrypted in transit and at rest, with regular security audits."
      },
      {
        question: "Do you offer training and support?",
        answer: "Absolutely! We provide comprehensive onboarding, training sessions, and 24/7 customer support. Our team is here to ensure you get the most out of Smart Property Check."
      }
    ]
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