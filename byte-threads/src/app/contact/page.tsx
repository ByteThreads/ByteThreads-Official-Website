'use client';

import { useState } from 'react';
import AnimatedNodesBackground from '@/components/ui/AnimatedNodesBackground';
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
        headers: {
          'Content-Type': 'application/json',
        },
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-black relative">
      <AnimatedNodesBackground />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-50 mb-4">
            {strings.contact.title}
          </h1>
          <p className="text-xl text-stone-300">
            {strings.contact.subtitle}
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-stone-900 rounded-3xl shadow-xl p-8 md:p-12 border border-stone-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-stone-200 mb-2">
                {strings.contact.form.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-stone-700 bg-stone-800 text-stone-100 focus:border-[#32527B] focus:outline-none transition-colors placeholder-stone-500"
                placeholder={strings.contact.form.namePlaceholder}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-stone-200 mb-2">
                {strings.contact.form.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-stone-700 bg-stone-800 text-stone-100 focus:border-[#32527B] focus:outline-none transition-colors placeholder-stone-500"
                placeholder={strings.contact.form.emailPlaceholder}
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-stone-200 mb-2">
                {strings.contact.form.subjectLabel}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-stone-700 bg-stone-800 text-stone-100 focus:border-[#32527B] focus:outline-none transition-colors placeholder-stone-500"
                placeholder={strings.contact.form.subjectPlaceholder}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-stone-200 mb-2">
                {strings.contact.form.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border-2 border-stone-700 bg-stone-800 text-stone-100 focus:border-[#32527B] focus:outline-none transition-colors resize-none placeholder-stone-500"
                placeholder={strings.contact.form.messagePlaceholder}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#32527B] hover:bg-[#28415f] disabled:bg-stone-700 disabled:cursor-not-allowed text-stone-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100"
              >
                {isSubmitting ? strings.contact.form.submitting : strings.contact.form.submitButton}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="text-green-400 text-center">
                {strings.contact.form.successMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-red-400 text-center">
                {strings.contact.form.errorMessage}
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="bg-stone-900 rounded-2xl p-6 shadow-lg border border-stone-800">
            <div className="text-[#32527B] mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-stone-100 mb-1">{strings.contact.info.email.label}</h3>
            <p className="text-stone-400">{strings.contact.info.email.value}</p>
          </div>

          <div className="bg-stone-900 rounded-2xl p-6 shadow-lg border border-stone-800">
            <div className="text-[#32527B] mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-stone-100 mb-1">{strings.contact.info.location.label}</h3>
            <p className="text-stone-400">{strings.contact.info.location.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
