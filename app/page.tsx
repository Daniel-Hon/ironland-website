export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-dark min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/70" />
        <div className="container-custom relative z-10 section-padding">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              IRONLAND
            </h1>
            <p className="text-2xl md:text-3xl text-brand-primary font-bold mb-4">
              Professional Tool Solutions
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Leading manufacturer of high-quality tool bags and custom OEM/ODM solutions. 
              Serving global B2B clients with precision engineering and reliable quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Explore Products
              </button>
              <button className="btn-secondary">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Why Choose IRONLAND
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over 15 years of experience, we deliver excellence in every product
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-primary rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Rigorous quality control and durable materials ensure long-lasting products</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-primary rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">OEM & ODM</h3>
              <p className="text-gray-600">Custom design and manufacturing tailored to your brand requirements</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-primary rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Export</h3>
              <p className="text-gray-600">Serving clients across Europe, North America, and worldwide markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with IRONLAND?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch today for a free consultation and product catalog
          </p>
          <button className="bg-white text-brand-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Request a Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">IRONLAND</h3>
              <p className="text-gray-400">Professional Tool Solutions Manufacturer</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tool Bags</li>
                <li>Tool Kits</li>
                <li>Custom OEM</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Factory Tour</li>
                <li>Quality Control</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@ironlandtools.com</li>
                <li>+86 XXX XXXX XXXX</li>
                <li>Hangzhou, China</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
            <p>&copy; 2026 IRONLAND. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
