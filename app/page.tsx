'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { productCategories, featuredProducts } from '@/content/products'

export default function Home() {
  // 获取主打产品并按 featuredProducts 顺序排序
  const featuredCategories = productCategories
    .filter(cat => featuredProducts.includes(cat.id))
    .sort((a, b) => featuredProducts.indexOf(a.id) - featuredProducts.indexOf(b.id))
  
  // 导航栏背景滚动效果
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    // 初始检查
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Navigation - 滚动时背景渐变 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src="/images/logo-ironland.png" alt="IRONLAND" className="h-20 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/" className="text-white text-xl hover:text-brand-primary transition">Home</Link>
              <Link href="/products" className="text-white text-xl hover:text-brand-primary transition">Products</Link>
              <Link href="/about" className="text-white text-xl hover:text-brand-primary transition">About</Link>
              <Link href="/contact" className="text-white text-xl hover:text-brand-primary transition">Contact</Link>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - 全屏视频背景 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/hero-fallback.jpg)' }}
          />
          {/* 深色遮罩层 */}
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        {/* 内容 - 左侧布局 */}
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10 pt-36 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左侧：文字内容 */}
            <div className="max-w-2xl">
              <div className="inline-block bg-white/20 text-white px-6 py-3 rounded-full text-lg font-medium mb-10 tracking-wide backdrop-blur-sm">
                Since 2003 · Professional Tool Bag Manufacturer
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.35]" style={{ letterSpacing: '0.03em' }}>
                <span className="text-white">PROFESSIONAL</span><br />
                <span className="text-brand-primary">TOOL STORAGE</span><br />
                <span className="text-brand-primary">SOLUTIONS</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-12 leading-[1.8] tracking-wide max-w-xl">
                Leading manufacturer of high-quality tool bags, tool kits, and custom OEM/ODM solutions. 
                Serving global B2B clients with precision engineering and reliable quality since 2003.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href="/products" className="btn-primary text-lg px-8 py-4">
                  Explore Products
                </Link>
                <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                  Contact Us
                </Link>
              </div>
            </div>
            
            {/* 右侧：留空，让视频背景显示 */}
            <div className="hidden lg:block" />
          </div>
        </div>
        
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Title */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Manufacturing by<br />
                <span className="text-brand-primary">the Numbers</span>
              </h2>
            </div>
            
            {/* Right Stats */}
            <div className="lg:w-2/3 grid grid-cols-3 gap-8 lg:gap-12">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-brand-primary flex items-center justify-center mb-4">
                  <span className="text-3xl lg:text-4xl font-bold text-white">20+</span>
                </div>
                <p className="text-gray-400 text-sm lg:text-base">Years Experience</p>
              </div>
              
              {/* Stat 2 */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-brand-primary flex items-center justify-center mb-4">
                  <span className="text-3xl lg:text-4xl font-bold text-white">50+</span>
                </div>
                <p className="text-gray-400 text-sm lg:text-base">Countries Served</p>
              </div>
              
              {/* Stat 3 */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-brand-primary flex items-center justify-center mb-4">
                  <span className="text-3xl lg:text-4xl font-bold text-white">500+</span>
                </div>
                <p className="text-gray-400 text-sm lg:text-base">B2B Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Featured Products Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-20">
            <span className="text-brand-primary font-medium text-lg tracking-wide">Our Products</span>
            <h2 className="text-5xl font-bold text-brand-dark mb-6 mt-3">
              Featured Categories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              12 product categories, 1500+ images, professional tool storage solutions for every trade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <div 
                key={category.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="aspect-square bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={`/images/products/${category.id === 'tool-backpack' ? 'bp-001' : category.id}.jpg`}
                    alt={category.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col h-[280px]">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  {/* Features - fixed height container */}
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[28px]">
                    {category.products.slice(0, 2).map((product) => (
                      <Link 
                        key={product.sku}
                        href={`/products/${product.sku}`}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded hover:bg-brand-primary hover:text-white transition-colors"
                      >
                        {product.sku}
                      </Link>
                    ))}
                    {category.products.length > 2 && (
                      <span className="text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded">
                        +{category.products.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>
                  
                  <Link 
                    href={`/products/${category.products[0].sku}`}
                    className="block w-full text-center py-3 border-2 border-brand-dark text-brand-dark rounded-lg font-medium hover:bg-brand-dark hover:text-white transition-colors"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-14">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-brand-primary text-lg font-medium hover:gap-3 transition-all"
            >
              View All 12 Categories 
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              Trusted by <span className="text-brand-primary">Industry Leaders</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Partnering with world-renowned brands across 50+ countries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Partner Logos - 2x4 Grid Layout (按 Desktop/333444 顺序) */}
            {[
              { name: 'Partner 1', logo: '1.png' },
              { name: 'Partner 2', logo: '2.png' },
              { name: 'Partner 3', logo: '3.jpg' },
              { name: 'Partner 4', logo: '4.jpg' },
              { name: 'Partner 5', logo: '5.png' },
              { name: 'Partner 6', logo: '6.jpg' },
              { name: 'Partner 7', logo: '7.jpeg' },
              { name: 'Partner 8', logo: '8.png' },
            ].map((partner) => (
              <div 
                key={partner.name}
                className="bg-white rounded-2xl p-6 flex items-center justify-center h-40 shadow-sm"
              >
                <img 
                  src={`/images/partners/${partner.logo}`}
                  alt={partner.name}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-20">
            <span className="text-brand-primary font-medium text-lg tracking-wide">Why Us</span>
            <h2 className="text-5xl font-bold text-brand-dark mb-6 mt-3">
              Why Choose IRONLAND
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              With over 20 years of experience, we deliver excellence in every product
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-10 rounded-2xl bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-primary rounded-xl mb-8 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Rigorous quality control and durable materials ensure long-lasting products that withstand daily professional use.</p>
            </div>
            
            <div className="p-10 rounded-2xl bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-primary rounded-xl mb-8 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">OEM & ODM</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Custom design and manufacturing tailored to your brand requirements. Your vision, our execution.</p>
            </div>
            
            <div className="p-10 rounded-2xl bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-primary rounded-xl mb-8 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Export</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Serving clients across Europe, North America, Australia, and worldwide markets with reliable logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to Partner with IRONLAND?
          </h2>
          <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Get in touch today for a free consultation, product catalog, and custom OEM quote.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/contact" className="bg-white text-brand-primary px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Request a Quote
            </Link>
            <Link href="/products" className="border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="grid md:grid-cols-4 gap-12 mb-14">
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">IRONLAND</h3>
              <p className="text-gray-400 mb-4 text-lg">Professional Tool Storage Solutions Manufacturer</p>
              <p className="text-gray-500">Hangzhou, China</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Products</h4>
              <ul className="space-y-3 text-gray-400 text-base">
                <li><Link href="/products" className="hover:text-brand-primary transition">Tool Bags</Link></li>
                <li><Link href="/products" className="hover:text-brand-primary transition">Tool Backpacks</Link></li>
                <li><Link href="/products" className="hover:text-brand-primary transition">Tool Belts</Link></li>
                <li><Link href="/products" className="hover:text-brand-primary transition">OEM Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400 text-base">
                <li><Link href="/about" className="hover:text-brand-primary transition">About Us</Link></li>
                <li><Link href="/factory" className="hover:text-brand-primary transition">Factory Tour</Link></li>
                <li><Link href="/quality" className="hover:text-brand-primary transition">Quality Control</Link></li>
                <li><Link href="/contact" className="hover:text-brand-primary transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-base">
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
          <div className="border-t border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">
              &copy; 2026 IRONLAND. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-500">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
