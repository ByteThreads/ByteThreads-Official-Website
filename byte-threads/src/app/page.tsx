import HeroSection from '@/sections/HeroSection';
import ServicesSection from '@/sections/ServicesSection';
import AboutSection from '@/sections/AboutSection';
import WorkSection from '@/sections/WorkSection';
import ProcessSection from '@/sections/ProcessSection';
import TechStackSection from '@/sections/TechStackSection';
import CTASection from '@/sections/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WorkSection />
      <ProcessSection />
      <TechStackSection />
      <CTASection />
      <Footer />
    </main>
  );
}
