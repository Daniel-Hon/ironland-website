'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Product } from '@/content/products'

interface ProductDetailClientProps {
  product: Product | null
  relatedProducts: Product[]
  sku: string
}

export default function ProductDetailClient({ product, relatedProducts, sku }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  
  // 表单状态
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: '',
    requirements: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          productSku: product?.sku,
          productName: product?.name
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', quantity: '', requirements: '' })
        setTimeout(() => {
          setShowQuoteModal(false)
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!product) {
    return (
      <main className="min-h-screen pt-20">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <img src="/images/logo-ironland.png" alt="IRONLAND" className="h-20 w-auto" />
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-brand-primary transition">Home</Link>
                <Link href="/products" className="text-white hover:text-brand-primary transition">Products</Link>
                <Link href="/about" className="text-white hover:text-brand-primary transition">About</Link>
                <Link href="/contact" className="text-white hover:text-brand-primary transition">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/products" className="btn-primary">
            Browse All Products
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="container mx-auto px-4 py-4">
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

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-brand-primary">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-brand-primary">Products</Link>
            <span>/</span>
            <span className="text-brand-dark font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 aspect-square">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                        selectedImage === idx ? 'border-brand-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.sku}
                </span>
                {product.certifications?.map(cert => (
                  <span key={cert} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {cert}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                {product.name}
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quick Specs - OEM/ODM & Custom Options */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {product.oemOdm && (
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">OEM/ODM</div>
                    <div className="text-xl font-bold text-brand-dark">{product.oemOdm}</div>
                  </div>
                )}
                {product.moq && (
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">MOQ</div>
                    <div className="text-xl font-bold text-brand-dark">{product.moq}</div>
                  </div>
                )}
              </div>
              
              {/* Custom Options */}
              {product.customOptions && (
                <div className="bg-brand-primary/10 p-4 rounded-xl mb-8">
                  <div className="text-sm text-brand-primary font-medium mb-1">Custom Options</div>
                  <div className="text-lg text-brand-dark">{product.customOptions}</div>
                </div>
              )}

              {/* CTA Button */}
              <div className="mb-12">
                <button
                  onClick={() => setShowQuoteModal(true)}
                  className="btn-primary text-xl px-12 py-5 w-full md:w-auto"
                >
                  Request Quote
                </button>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-brand-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Technical Specifications</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full">
              <tbody>
                {product.specifications.dimensions && (
                  <tr className="border-b">
                    <td className="px-6 py-4 bg-gray-50 font-medium text-gray-700 w-1/3">Dimensions</td>
                    <td className="px-6 py-4">{product.specifications.dimensions}</td>
                  </tr>
                )}
                {product.specifications.material && (
                  <tr className="border-b">
                    <td className="px-6 py-4 bg-gray-50 font-medium text-gray-700">Material</td>
                    <td className="px-6 py-4">{product.specifications.material}</td>
                  </tr>
                )}
                {product.oemOdm && (
                  <tr className="border-b">
                    <td className="px-6 py-4 bg-gray-50 font-medium text-gray-700">OEM/ODM</td>
                    <td className="px-6 py-4">{product.oemOdm}</td>
                  </tr>
                )}
                {product.customOptions && (
                  <tr className="border-b">
                    <td className="px-6 py-4 bg-gray-50 font-medium text-gray-700">Custom Options</td>
                    <td className="px-6 py-4">{product.customOptions}</td>
                  </tr>
                )}
                {product.moq && (
                  <tr>
                    <td className="px-6 py-4 bg-gray-50 font-medium text-gray-700">MOQ</td>
                    <td className="px-6 py-4">{product.moq}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, idx) => (
                <motion.div
                  key={relatedProduct.sku}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-contain p-6"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-brand-primary font-medium mb-2">{relatedProduct.sku}</div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                    <Link
                      href={`/products/${relatedProduct.sku}`}
                      className="block w-full text-center py-3 border-2 border-brand-dark text-brand-dark rounded-lg font-medium hover:bg-brand-dark hover:text-white transition"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-brand-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get a customized quote for your bulk order. We offer competitive pricing and flexible MOQ options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-brand-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Request Quote
            </Link>
            <Link href="/products" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Browse More Products
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Request Quote</h3>
            <p className="text-gray-600 mb-6">
              Interested in <strong>{product.name}</strong> ({product.sku})?
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="Quantity Needed"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                rows={3}
                placeholder="Additional Requirements"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
              />
              
              {/* 状态提示 */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-100 text-green-700 rounded-lg text-center">
                  ✅ 提交成功！我们会尽快联系您
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg text-center">
                  ❌ 提交失败，请重试
                </div>
              )}
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowQuoteModal(false)}
                  disabled={isSubmitting}
                  className="flex-1 py-3 border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4">
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
