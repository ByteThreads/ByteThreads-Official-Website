import type { Metadata } from 'next';
import ProductCaseStudy from '@/components/ui/ProductCaseStudy';
import AnimatedShowly from '@/components/ui/AnimatedShowly';
import Footer from '@/components/layout/Footer';
import { showly } from '@/content/products';

export const metadata: Metadata = {
  title: showly.meta.title,
  description: showly.meta.description,
  alternates: {
    canonical: `/work/${showly.slug}`,
  },
  openGraph: {
    title: showly.meta.title,
    description: showly.meta.description,
    url: `/work/${showly.slug}`,
  },
};

export default function ShowlyPage() {
  return (
    <>
      <ProductCaseStudy product={showly} mockup={<AnimatedShowly />} />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: showly.name,
            url: showly.siteUrl,
            applicationCategory: showly.jsonLd.category,
            operatingSystem: 'Web, iOS',
            offers: {
              '@type': 'Offer',
              price: showly.jsonLd.price,
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
