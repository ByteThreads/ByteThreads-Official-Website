import type { Metadata } from 'next';
import ProductCaseStudy from '@/components/ui/ProductCaseStudy';
import AnimatedWorkflow from '@/components/ui/AnimatedWorkflow';
import Footer from '@/components/layout/Footer';
import { smartPropertyCheck } from '@/content/products';

export const metadata: Metadata = {
  title: smartPropertyCheck.meta.title,
  description: smartPropertyCheck.meta.description,
  alternates: {
    canonical: `/work/${smartPropertyCheck.slug}`,
  },
  openGraph: {
    title: smartPropertyCheck.meta.title,
    description: smartPropertyCheck.meta.description,
    url: `/work/${smartPropertyCheck.slug}`,
  },
};

export default function SmartPropertyCheckPage() {
  return (
    <>
      <ProductCaseStudy product={smartPropertyCheck} mockup={<AnimatedWorkflow />} />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: smartPropertyCheck.name,
            url: smartPropertyCheck.siteUrl,
            applicationCategory: smartPropertyCheck.jsonLd.category,
            operatingSystem: 'iOS',
            offers: {
              '@type': 'Offer',
              price: smartPropertyCheck.jsonLd.price,
              priceCurrency: 'USD',
            },
            publisher: {
              '@type': 'Organization',
              name: 'ByteThreads LLC',
              url: 'https://bytethreadsllc.com',
            },
          }),
        }}
      />
    </>
  );
}
