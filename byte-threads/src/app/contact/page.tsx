'use client';

import { useState } from 'react';
import ThreadBackground from '@/components/ui/ThreadBackground';
import Footer from '@/components/layout/Footer';
import { strings } from '@/utils/content';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="pt-20 min-h-screen bg-navy relative">
        <ThreadBackground variant="contact" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Header */}
          <div className="mb-16">
            <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block mb-4">
              Contact
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
              {strings.contact.title}
            </h1>
            <p className="text-lg text-foreground/70">
              {strings.contact.subtitle}
            </p>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-foreground/5 bg-navy-light/50 backdrop-blur-sm p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-foreground/60 uppercase tracking-wider mb-2">
                    {strings.contact.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-navy/50 text-foreground focus:border-copper/50 focus:outline-none transition-colors placeholder-foreground/40"
                    placeholder={strings.contact.form.namePlaceholder}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-foreground/60 uppercase tracking-wider mb-2">
                    {strings.contact.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-navy/50 text-foreground focus:border-copper/50 focus:outline-none transition-colors placeholder-foreground/40"
                    placeholder={strings.contact.form.emailPlaceholder}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-foreground/60 uppercase tracking-wider mb-2">
                  {strings.contact.form.subjectLabel}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-navy/50 text-foreground focus:border-copper/50 focus:outline-none transition-colors placeholder-foreground/40"
                  placeholder={strings.contact.form.subjectPlaceholder}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-foreground/60 uppercase tracking-wider mb-2">
                  {strings.contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-navy/50 text-foreground focus:border-copper/50 focus:outline-none transition-colors resize-none placeholder-foreground/40"
                  placeholder={strings.contact.form.messagePlaceholder}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-copper hover:bg-copper-light disabled:bg-foreground/10 disabled:cursor-not-allowed text-navy font-medium py-4 px-8 rounded-lg transition-all duration-300"
              >
                {isSubmitting ? strings.contact.form.submitting : strings.contact.form.submitButton}
              </button>

              {/* Status */}
              {submitStatus === 'success' && (
                <div className="text-sage text-center text-sm">
                  {strings.contact.form.successMessage}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-400 text-center text-sm">
                  {strings.contact.form.errorMessage}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-foreground/5 bg-navy-light/30 p-6">
              <span className="text-xs font-mono text-copper uppercase tracking-wider block mb-2">
                {strings.contact.info.email.label}
              </span>
              <a
                href={`mailto:${strings.contact.info.email.value}`}
                className="text-foreground/60 hover:text-copper transition-colors"
              >
                {strings.contact.info.email.value}
              </a>
            </div>
            <div className="rounded-xl border border-foreground/5 bg-navy-light/30 p-6">
              <span className="text-xs font-mono text-copper uppercase tracking-wider block mb-2">
                {strings.contact.info.location.label}
              </span>
              <p className="text-foreground/60">{strings.contact.info.location.value}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
