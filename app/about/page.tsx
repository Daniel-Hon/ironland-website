import Link from 'next/link'
import { companyInfo } from '@/content/products'

export default function AboutPage() {
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
              <Link href="/about" className="text-brand-primary">About</Link>
              <Link href="/contact" className="hover:text-brand-primary transition">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-brand-dark py-20 md:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-brand-primary">IRONLAND</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional tool bag manufacturer since 2005. 
            Delivering quality and innovation to B2B clients worldwide.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-primary font-medium">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 mt-2">
                Two Decades of Excellence
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in {companyInfo.established}, {companyInfo.fullName} has grown from a small workshop 
                to a leading manufacturer of professional tool storage solutions. Based in {companyInfo.location}, 
                we specialize in designing and producing high-quality tool bags, tool backpacks, tool belts, 
                and custom OEM products.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has earned us the trust 
                of B2B clients across {companyInfo.markets.join(', ')}, and beyond. With {companyInfo.certifications.join(', ')} 
                certifications, we maintain the highest standards in manufacturing and quality control.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we serve over 1000 B2B clients globally, providing them with reliable tool storage 
                solutions that meet their specific needs and exceed their expectations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-9xl opacity-20">🏭</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-primary py-16">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/80">B2B Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">12</div>
              <div className="text-white/80">Product Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-primary font-medium">Quality Assurance</span>
            <h2 className="text-3xl font-bold text-brand-dark mt-2">Our Certifications</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {companyInfo.certifications.map((cert) => (
              <div key={cert} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-dark">{cert}</h3>
                <p className="text-gray-500 mt-2">Certified</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Markets */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-primary font-medium">Global Reach</span>
            <h2 className="text-3xl font-bold text-brand-dark mt-2">Markets We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {companyInfo.markets.map((market) => (
              <span 
                key={market}
                className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium"
              >
                {market}
              </span>
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
