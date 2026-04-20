'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { companyInfo } from '@/content/products'

export default function AboutPage() {
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
      <section className="bg-brand-dark py-24">
        <div className="container-custom px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-brand-primary">IRONLAND</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {companyInfo.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-brand-dark mb-6">
                15+ Years of Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2005, Hangzhou Ironland Tools Co., Ltd. has grown into a leading manufacturer 
                of professional tool storage solutions. We specialize in designing and producing high-quality 
                tool bags, tool backpacks, tool belts, and custom OEM/ODM products for global B2B clients.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our commitment to quality, innovation, and customer satisfaction has earned us the trust 
                of clients across Europe, North America, Australia, and Asia. With over 1,500 product images 
                and 12 diverse categories, we offer comprehensive solutions for every trade and profession.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-brand-primary mb-2">2005</div>
                  <div className="text-gray-600">Year Established</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-brand-primary mb-2">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-brand-primary mb-2">1000+</div>
                  <div className="text-gray-600">B2B Clients</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-brand-primary mb-2">1500+</div>
                  <div className="text-gray-600">Product Images</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-3xl p-12 flex items-center justify-center min-h-[500px]"
            >
              <div className="text-center">
                <div className="text-9xl mb-6">🏭</div>
                <p className="text-gray-500 text-lg">Factory & Office</p>
                <p className="text-gray-400 text-sm mt-2">Hangzhou, Zhejiang, China</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Certifications & Standards
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We maintain the highest industry standards to ensure product quality and safety
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyInfo.certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">{cert}</h3>
                <p className="text-gray-600">
                  {cert === 'ISO 9001' && 'Quality Management System'}
                  {cert === 'BSCI' && 'Business Social Compliance Initiative'}
                  {cert === 'CE' && 'European Conformity Standard'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Quality First',
                description: 'Every product meets rigorous quality standards before shipment'
              },
              {
                icon: '🤝',
                title: 'Customer Focus',
                description: 'Your success is our success - we build long-term partnerships'
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'Continuous improvement in design, materials, and manufacturing'
              },
              {
                icon: '🌍',
                title: 'Global Vision',
                description: 'Serving clients worldwide with local market understanding'
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Markets */}
      <section className="bg-brand-dark section-padding">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Global Presence
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Serving clients across major markets worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {companyInfo.markets.map((market, index) => (
              <motion.div
                key={market}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition"
              >
                <div className="text-5xl mb-4">
                  {market === 'Europe' && '🇪🇺'}
                  {market === 'North America' && '🌎'}
                  {market === 'Australia' && '🌏'}
                  {market === 'Asia' && '🌏'}
                </div>
                <h3 className="text-xl font-bold text-white">{market}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Partner with IRONLAND?
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss how we can support your business with quality tool storage solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Contact Us Today
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
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
