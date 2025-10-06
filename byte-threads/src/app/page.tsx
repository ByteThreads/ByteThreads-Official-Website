import { strings } from '@/utils/content';
import TypingEffect from '@/components/ui/TypingEffect';

export default function Home() {
  return (
    <div className="pt-16">
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