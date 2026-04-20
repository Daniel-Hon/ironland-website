'use client'

import Link from 'next/link'
import { useState } from 'react'
import { productCategories } from '@/content/products'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(productCategories[0].id)
  
  const currentCategory = productCategories.find(cat => cat.id === selectedCategory)
  const currentProducts = currentCategory?.products || []

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
      <section className="bg-brand-dark py-16">
        <div className="container-custom px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-brand-primary">Products</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Do not believe? Please continue to browse below!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Sidebar + Product Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Sidebar - Category Navigation */}
            <motion.aside 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-72 flex-shrink-0"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
                <div className="bg-brand-primary px-6 py-4">
                  <h2 className="text-white font-bold text-lg">PRODUCTS</h2>
                </div>
                <div className="p-4">
                  <ul className="space-y-1">
                    {productCategories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                            selectedCategory === category.id
                              ? 'bg-brand-primary text-white shadow-md'
                              : 'hover:bg-gray-100 text-gray-700'
                          }`}
                        >
                          <span className="font-medium">{category.name}</span>
                          <span className={`text-sm ${
                            selectedCategory === category.id 
                              ? 'text-white/80' 
                              : 'text-gray-400 group-hover:text-gray-500'
                          }`}>
                            ({category.products.length})
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Category Info Card */}
                <div className="px-4 pb-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-brand-dark mb-2">
                      {currentCategory?.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {currentCategory?.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{currentCategory?.imageCount || 0} images</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Right Content - Product Grid */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-brand-dark">
                      {currentCategory?.name}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {currentCategory?.products.length} products available
                    </p>
                  </div>

                  {/* Products Grid */}
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {currentProducts.map((product, index) => (
                      <motion.div
                        key={product.sku}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Product Image */}
                        <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors" />
                          
                          {/* Placeholder Icon */}
                          <div className="text-center relative z-10">
                            <span className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300 block">
                              🛠️
                            </span>
                          </div>
                          
                          {/* Quick Actions Overlay */}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                            <Link
                              href={`/products/${product.sku}`}
                              className="bg-white text-brand-dark px-4 py-2 rounded-lg font-medium hover:bg-brand-primary hover:text-white transition-colors text-sm"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                        
                        {/* Product Info */}
                        <div className="p-5">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                              {product.sku}
                            </h3>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              REACH
                            </span>
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {product.name}
                          </p>
                          

                          
                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <Link 
                              href={`/products/${product.sku}`}
                              className="flex-1 text-center py-2.5 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 transition-colors text-sm"
                            >
                              Read more
                            </Link>
                            <button className="px-3 py-2.5 border border-gray-200 rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Empty State */}
                  {currentProducts.length === 0 && (
                    <div className="text-center py-20">
                      <div className="text-6xl mb-4">📦</div>
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                      <p className="text-gray-500">This category is currently empty.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
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
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Need More Details?
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get our complete product catalog with specifications, pricing, and customization options.
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
              Download Catalog
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
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
