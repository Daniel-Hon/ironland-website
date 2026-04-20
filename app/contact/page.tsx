'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: '',
    interest: 'General Inquiry'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
    // 实际部署时会连接后端 API
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="container-custom px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src="/images/logo-ironland.png" alt="IRONLAND" className="h-20 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-brand-primary transition">Home</Link>
              <Link href="/products" className="text-white hover:text-brand-primary transition">Products</Link>
              <Link href="/about" className="text-white hover:text-brand-primary transition">About</Link>
              <Link href="/contact" className="text-white hover:text-brand-primary transition">Contact</Link>
              <Link href="/contact" className="btn-primary text-sm">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-brand-dark py-20">
        <div className="container-custom px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-brand-primary">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your project? Contact us for a free consultation and quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-brand-dark mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">We typically respond within 24 hours</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                      placeholder="United States"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I'm Interested In *
                  </label>
                  <select
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                  >
                    <option>General Inquiry</option>
                    <option>Product Catalog Request</option>
                    <option>OEM/ODM Services</option>
                    <option>Bulk Order Quote</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition resize-none"
                    placeholder="Tell us about your project, quantity requirements, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-primary/90 transition shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">Email Us</h4>
                      <p className="text-gray-600">info@ironlandtools.com</p>
                      <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">Call Us</h4>
                      <p className="text-gray-600">+86 XXX XXXX XXXX</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri 9:00-18:00 CST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">Visit Us</h4>
                      <p className="text-gray-600">Hangzhou, Zhejiang, China</p>
                      <p className="text-sm text-gray-500 mt-1">Factory tours available by appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-brand-dark text-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Why Partner With IRONLAND?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">15+ Years Experience</h4>
                      <p className="text-gray-300 text-sm">Serving global B2B clients since 2005</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">OEM/ODM Services</h4>
                      <p className="text-gray-300 text-sm">Custom designs tailored to your brand</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">Quality Certifications</h4>
                      <p className="text-gray-300 text-sm">ISO 9001, BSCI, CE certified</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">Global Export</h4>
                      <p className="text-gray-300 text-sm">50+ countries served worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">Fast Response</h4>
                      <p className="text-gray-300 text-sm">24-hour response time guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-200 h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📍</div>
          <p className="text-gray-600 font-medium">Hangzhou, Zhejiang, China</p>
          <p className="text-gray-500 text-sm mt-2">Factory location available upon request</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-16">
        <div className="container-custom px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">IRONLAND</h3>
            <p className="text-gray-400 mb-4">Professional Tool Solutions Manufacturer</p>
            <p className="text-gray-500 text-sm">&copy; 2026 IRONLAND. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
