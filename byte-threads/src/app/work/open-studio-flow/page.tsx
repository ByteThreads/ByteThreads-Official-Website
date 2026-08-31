import type { Metadata } from 'next';
import ProductCaseStudy from '@/components/ui/ProductCaseStudy';
import AnimatedDashboard from '@/components/ui/AnimatedDashboard';
import Footer from '@/components/layout/Footer';
import { openStudioFlow } from '@/content/products';

export const metadata: Metadata = {
  title: openStudioFlow.meta.title,
  description: openStudioFlow.meta.description,
  alternates: {
    canonical: `/work/${openStudioFlow.slug}`,
  },
  openGraph: {
    title: openStudioFlow.meta.title,
    description: openStudioFlow.meta.description,
    url: `/work/${openStudioFlow.slug}`,
  },
};

export default function OpenStudioFlowPage() {
  return (
    <>
      <ProductCaseStudy product={openStudioFlow} mockup={<AnimatedDashboard />} />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: openStudioFlow.name,
            url: openStudioFlow.siteUrl,
            applicationCategory: openStudioFlow.jsonLd.category,
            operatingSystem: 'Web, iOS',
            offers: {
              '@type': 'Offer',
              price: openStudioFlow.jsonLd.price,
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
