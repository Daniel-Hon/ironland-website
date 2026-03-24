import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-brand-dark py-6">
        <div className="container-custom px-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              IRONLAND
            </Link>
            <div className="hidden md:flex space-x-6 text-white">
              <Link href="/" className="hover:text-brand-primary transition">Home</Link>
              <Link href="/products" className="hover:text-brand-primary transition">Products</Link>
              <Link href="/about" className="hover:text-brand-primary transition">About</Link>
              <Link href="/contact" className="text-brand-primary">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-brand-dark py-20 md:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="text-brand-primary">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch for product inquiries, OEM quotes, or partnership opportunities.
            We are here to help you find the perfect tool storage solutions.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <span className="text-brand-primary font-medium">Get in Touch</span>
              <h2 className="text-3xl font-bold text-brand-dark mb-6 mt-2">
                Let Us Discuss Your Needs
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you need standard products or custom OEM solutions, 
                our team is ready to assist you. Fill out the form or contact us directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">Email</h3>
                    <p className="text-gray-600">info@ironlandtools.com</p>
                    <p className="text-gray-500 text-sm">We will respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">Phone</h3>
                    <p className="text-gray-600">+86 XXX XXXX XXXX</p>
                    <p className="text-gray-500 text-sm">Monday - Friday, 9:00 - 18:00 CST</p>
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
                    <h3 className="font-bold text-brand-dark">Address</h3>
                    <p className="text-gray-600">Hangzhou, Zhejiang, China</p>
                    <p className="text-gray-500 text-sm">Factory visits by appointment</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links Placeholder */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-bold text-brand-dark mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-400">in</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-400">fb</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-400">tw</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Send Inquiry</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                    placeholder="Your Company Ltd."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition">
                    <option value="">Select your country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="de">Germany</option>
                    <option value="au">Australia</option>
                    <option value="ca">Canada</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition">
                    <option value="">Select inquiry type</option>
                    <option value="product">Product Inquiry</option>
                    <option value="oem">OEM/ODM Quote</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                
                <button type="submit" className="w-full btn-primary py-4">
                  Send Inquiry
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-primary font-medium">FAQ</span>
            <h2 className="text-3xl font-bold text-brand-dark mt-2">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What is your minimum order quantity (MOQ)?',
                a: 'Our standard MOQ is 500 pieces per SKU for standard products. For custom OEM orders, MOQ varies based on product specifications. Please contact us for details.'
              },
              {
                q: 'Do you offer custom OEM/ODM services?',
                a: 'Yes, we specialize in custom OEM and ODM manufacturing. We can customize materials, colors, sizes, logos, and packaging according to your requirements.'
              },
              {
                q: 'What is your production lead time?',
                a: 'Standard products: 30-45 days after order confirmation. Custom OEM products: 45-60 days depending on complexity and order quantity.'
              },
              {
                q: 'What certifications do you have?',
                a: 'We are ISO 9001, BSCI, and CE certified. We can also arrange additional certifications based on your market requirements.'
              },
              {
                q: 'Do you provide samples?',
                a: 'Yes, we provide samples for quality evaluation. Sample cost will be refunded upon placing a bulk order.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-brand-dark mb-2">Q: {faq.q}</h3>
                <p className="text-gray-600">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">IRONLAND</h3>
              <p className="text-gray-400">Professional Tool Solutions</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Tool Bags</li>
                <li>Tool Backpacks</li>
                <li>Tool Belts</li>
                <li>OEM Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About Us</li>
                <li>Factory</li>
                <li>Quality</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>info@ironlandtools.com</li>
                <li>Hangzhou, China</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 IRONLAND. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
