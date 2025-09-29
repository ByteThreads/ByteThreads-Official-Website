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
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
            <TypingEffect
              text={strings.hero.mainHeading}
              speed={60}
              startDelay={800}
              showCursor={true}
            />
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 drop-shadow-lg font-light">
            {strings.hero.subHeading}
          </p>
        </div>
      </section>

      {/* Content Section to test scroll */}
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{strings.sections.scrollDemo.heading}</h2>
          <p className="text-lg text-gray-600">{strings.sections.scrollDemo.description}</p>
        </div>
      </section>

      {/* Another Section */}
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{strings.sections.moreContent.heading}</h2>
          <p className="text-lg text-gray-600">{strings.sections.moreContent.description}</p>
        </div>
      </section>
    </div>
  );
}