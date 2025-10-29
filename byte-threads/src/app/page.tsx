import { strings } from '@/utils/content';
import TypingEffect from '@/components/ui/TypingEffect';
import ProductShowcase from '@/components/ui/ProductShowcase';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          <source src="/videos/hero-video.webm" type="video/webm" />
          {/* Fallback for browsers that don't support video */}
          {strings.hero.videoFallback}
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content overlay */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 relative">
            {/* Invisible text to reserve space */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-stone-50 drop-shadow-2xl leading-tight opacity-0 pointer-events-none" aria-hidden="true">
              {strings.hero.mainHeading}
            </h1>
            {/* Visible typing animation overlaid on top */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-stone-50 drop-shadow-2xl leading-tight absolute inset-0 flex items-center justify-center">
              <TypingEffect
                text={strings.hero.mainHeading}
                speed={60}
                startDelay={800}
                showCursor={true}
              />
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-stone-100/90 drop-shadow-lg font-light">
            {strings.hero.subHeading}
          </p>
        </div>
      </section>

      {/* Animated Section Divider */}
      <div className="relative h-32 bg-gradient-to-b from-black/40 to-transparent overflow-hidden">
        {/* Animated wavy edge - top */}
        <svg
          className="absolute top-0 w-full h-8"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="topWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#5E80FF', stopOpacity: 0 }}>
                <animate attributeName="offset" values="0%;1%;0%" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" style={{ stopColor: '#5E80FF', stopOpacity: 1 }}>
                <animate attributeName="offset" values="0.3%;0.5%;0.3%" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" style={{ stopColor: '#5E80FF', stopOpacity: 0 }}>
                <animate attributeName="offset" values="0.5%;1%;0.5%" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <path
            d="M0,20 Q360,10 720,20 T1440,20"
            stroke="url(#topWaveGradient)"
            strokeWidth="2"
            fill="none"
          >
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="
                M0,20 Q360,10 720,20 T1440,20;
                M0,20 Q360,30 720,20 T1440,20;
                M0,20 Q360,10 720,20 T1440,20
              "
            />
          </path>
        </svg>

        {/* Animated wavy edge - bottom */}
        <svg
          className="absolute bottom-0 w-full h-8"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bottomWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#8C5EFF', stopOpacity: 0 }}>
                <animate attributeName="offset" values="0%;1%;0%" dur="3s" begin="1.5s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" style={{ stopColor: '#8C5EFF', stopOpacity: 1 }}>
                <animate attributeName="offset" values="0.3%;0.5%;0.3%" dur="3s" begin="1.5s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" style={{ stopColor: '#8C5EFF', stopOpacity: 0 }}>
                <animate attributeName="offset" values="0.5%;1%;0.5%" dur="3s" begin="1.5s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <path
            d="M0,20 Q360,30 720,20 T1440,20"
            stroke="url(#bottomWaveGradient)"
            strokeWidth="2"
            fill="none"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,20 Q360,30 720,20 T1440,20;
                M0,20 Q360,10 720,20 T1440,20;
                M0,20 Q360,30 720,20 T1440,20
              "
            />
          </path>
        </svg>

        {/* Wave transition */}
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 C240,100 480,100 720,64 C960,28 1200,28 1440,64 L1440,120 L0,120 Z"
            fill="#0f172a"
            fillOpacity="1"
          />
        </svg>
      </div>

      {/* Product Showcase Section */}
      <ProductShowcase
        title={strings.product.title}
        tagline={strings.product.tagline}
        description={strings.product.description}
        features={strings.product.features}
        ctaText={strings.product.cta.text}
        ctaLink={strings.product.cta.link}
      />

      {/* Footer */}
      <footer className="relative bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Links Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
                <a href="https://www.smartpropertycheck.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Smart Property Check
                </a>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>Minnesota, USA</p>
                <a href="mailto:contact@bytethreadsllc.com" className="hover:text-white transition-colors block">
                  contact@bytethreadsllc.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-sm mb-1">ByteThreads</p>
                <p className="text-gray-400 text-xs">
                  &copy; {new Date().getFullYear()} ByteThreads LLC. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Animated Threads Section - Hidden for now */}
      {/* <section
        className="relative min-h-screen overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #0a0a0a, #1a1a2e)' }}
      >
        <AnimatedThreads sections={strings.sections.threads} />
      </section> */}

      {/* Features Section - Hidden for later implementation */}
      {/* <FeaturesSection features={strings.sections.features} /> */}

      {/* Test Image Gallery Section - Hidden for later implementation */}
      {/* <section className="min-h-screen flex items-center justify-center py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{strings.sections.gallery.heading}</h2>
            <p className="text-lg text-gray-600">{strings.sections.gallery.description}</p>
          </div>

          <ImageGallery
            images={[
              {
                src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
                alt: "Basketball player shooting",
                title: "Basketball Action"
              },
              {
                src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                alt: "Soccer ball on field",
                title: "Soccer Field"
              },
              {
                src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
                alt: "Runner on track",
                title: "Track Running"
              },
              {
                src: "https://images.unsplash.com/photo-1554068292-8e2d40e5d70c?w=400&h=300&fit=crop",
                alt: "Tennis court",
                title: "Tennis Court"
              },
              {
                src: "https://images.unsplash.com/photo-1571892807607-9a0f96c0a12b?w=400&h=300&fit=crop",
                alt: "Swimming pool",
                title: "Swimming Pool"
              },
              {
                src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
                alt: "Gym equipment",
                title: "Gym Workout"
              }
            ]}
          />
        </div>
      </section> */}

      {/* Another Section - Hidden for later implementation */}
      {/* <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{strings.sections.moreContent.heading}</h2>
          <p className="text-lg text-gray-600">{strings.sections.moreContent.description}</p>
        </div>
      </section> */}

      {/* Footer - Hidden for later implementation */}
      {/* <Footer /> */}
    </div>
  );
}