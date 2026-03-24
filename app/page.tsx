import Link from 'next/link'
import { productCategories, featuredProducts } from '@/content/products'

export default function Home() {
  // 获取主打产品
  const featuredCategories = productCategories.filter(cat => 
    featuredProducts.includes(cat.id)
  )

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm">
        <div className="container-custom px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              IRONLAND
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
      <section className="relative bg-brand-dark min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-dark/80" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(240,74,36,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container-custom relative z-10 section-padding">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-primary/20 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Since 2005 · Professional Tool Manufacturer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Professional<br />
              <span className="text-brand-primary">Tool Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Leading manufacturer of high-quality tool bags, tool kits, and custom OEM/ODM solutions. 
              Serving global B2B clients with precision engineering and reliable quality since 2005.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-700">
              <div>
                <div className="text-3xl font-bold text-brand-primary">15+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">50+</div>
                <div className="text-gray-400 text-sm">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">1000+</div>
                <div className="text-gray-400 text-sm">B2B Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-medium">Our Products</span>
            <h2 className="text-4xl font-bold text-brand-dark mb-4 mt-2">
              Featured Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              12 product categories, 1500+ images, professional tool storage solutions for every trade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <div 
                key={category.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Placeholder */}
                <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors" />
                  <span className="text-7xl opacity-20 group-hover:scale-110 transition-transform">🛠️</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-1">
                    {category.name}
                  </h3>
                  <p className="text-brand-primary text-sm font-medium mb-3">
                    {category.nameCN}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.products.slice(0, 2).map((product) => (
                      <span 
                        key={product.sku}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {product.sku}
                      </span>
                    ))}
                    <span className="text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded">
                      +{category.products.length - 2} more
                    </span>
                  </div>
                  
                  <Link 
                    href="/products"
                    className="block w-full text-center py-3 border-2 border-brand-dark text-brand-dark rounded-lg font-medium hover:bg-brand-dark hover:text-white transition-colors"
                  >
                    View Category
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all"
            >
              View All 12 Categories 
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-medium">Why Us</span>
            <h2 className="text-4xl font-bold text-brand-dark mb-4 mt-2">
              Why Choose IRONLAND
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over 15 years of experience, we deliver excellence in every product
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-primary rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">Rigorous quality control and durable materials ensure long-lasting products that withstand daily professional use.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-primary rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">OEM & ODM</h3>
              <p className="text-gray-600 leading-relaxed">Custom design and manufacturing tailored to your brand requirements. Your vision, our execution.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-primary rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Global Export</h3>
              <p className="text-gray-600 leading-relaxed">Serving clients across Europe, North America, Australia, and worldwide markets with reliable logistics.</p>
            </div>
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Partner with IRONLAND?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Get in touch today for a free consultation, product catalog, and custom OEM quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-brand-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Request a Quote
            </Link>
            <Link href="/products" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-16">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">IRONLAND</h3>
              <p className="text-gray-400 mb-4">Professional Tool Solutions Manufacturer</p>
              <p className="text-gray-500 text-sm">Hangzhou, China</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Products</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/products" className="hover:text-brand-primary transition">Tool Bags</Link></li>
                <li><Link href="/products" className="hover:text-brand-primary transition">Tool Backpacks</Link></li>
                <li><Link href="/products" className="hover:text-brand-primary transition">Tool Belts</Link></li>
                <li><Link href="/products" className="hover:text-brand-primary transition">OEM Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-brand-primary transition">About Us</Link></li>
                <li><Link href="/factory" className="hover:text-brand-primary transition">Factory Tour</Link></li>
                <li><Link href="/quality" className="hover:text-brand-primary transition">Quality Control</Link></li>
                <li><Link href="/contact" className="hover:text-brand-primary transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@ironlandtools.com
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +86 XXX XXXX XXXX
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Hangzhou, China
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2026 IRONLAND. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
