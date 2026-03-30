import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-xs font-mono text-copper uppercase tracking-[0.2em] hover:text-copper/80 transition-colors mb-8 inline-block"
          >
            &larr; Back to Home
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Privacy Policy</h1>
          <p className="text-foreground/40 text-sm mb-12">Last updated: March 29, 2026</p>

          <div className="space-y-10 text-foreground/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                ByteThreads LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at bytethreadsllc.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect information you provide directly through our contact form:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Subject and message content</li>
              </ul>
              <p className="mt-3">
                We do not use cookies, analytics trackers, or any third-party tracking scripts on this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <p>We use the information you provide solely to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Respond to your inquiry or message</li>
                <li>Communicate with you about potential projects</li>
              </ul>
              <p className="mt-3">We do not sell, share, or distribute your information to third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Third-Party Services</h2>
              <p>We use the following third-party service to operate this website:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Resend</strong> &mdash; for delivering contact form emails</li>
                <li><strong>Vercel</strong> &mdash; for website hosting</li>
              </ul>
              <p className="mt-3">These services have their own privacy policies. We encourage you to review them.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Retention</h2>
              <p>
                Contact form submissions are delivered to our email and are not stored in any database. We retain email correspondence only as long as necessary to respond to your inquiry.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Request deletion of any data we hold about you</li>
                <li>Ask what information we have collected</li>
                <li>Opt out of further communication</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at{' '}
                <a href="mailto:contact@bytethreadsllc.com" className="text-copper hover:text-copper/80 transition-colors">
                  contact@bytethreadsllc.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, contact us at{' '}
                <a href="mailto:contact@bytethreadsllc.com" className="text-copper hover:text-copper/80 transition-colors">
                  contact@bytethreadsllc.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-foreground/10 flex justify-between items-center">
            <Link href="/" className="text-copper hover:text-copper/80 text-sm transition-colors">
              &larr; Back to Home
            </Link>
            <Link href="/terms" className="text-foreground/50 hover:text-foreground/70 text-sm transition-colors">
              Terms of Service &rarr;
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
