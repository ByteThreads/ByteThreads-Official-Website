import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
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

          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Terms of Service</h1>
          <p className="text-foreground/40 text-sm mb-12">Last updated: March 29, 2026</p>

          <div className="space-y-10 text-foreground/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the ByteThreads LLC website (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
              <p>
                ByteThreads LLC is a boutique software development studio. This website showcases our services, portfolio, and provides a means to contact us for project inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Contact Form</h2>
              <p>
                When submitting the contact form, you agree to provide accurate information. We will use the information solely to respond to your inquiry. We are not obligated to respond to every submission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
              <p>
                All content on this website &mdash; including text, design, code, logos, and graphics &mdash; is the property of ByteThreads LLC and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Project Work</h2>
              <p>
                Any development work, consulting, or services engaged through ByteThreads LLC will be governed by a separate agreement between the parties. These Terms of Service apply only to the use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BYTETHREADS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. External Links</h2>
              <p>
                This website may contain links to third-party websites (including our portfolio projects). We are not responsible for the content or privacy practices of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the Service constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Minnesota, United States.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact</h2>
              <p>
                If you have questions about these Terms, contact us at{' '}
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
            <Link href="/privacy" className="text-foreground/50 hover:text-foreground/70 text-sm transition-colors">
              Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
