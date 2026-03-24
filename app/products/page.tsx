import { productCategories, featuredProducts } from '@/content/products'
import Link from 'next/link'

export default function ProductsPage() {
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
              <Link href="/products" className="text-brand-primary">Products</Link>
              <Link href="/about" className="hover:text-brand-primary transition">About</Link>
              <Link href="/contact" className="hover:text-brand-primary transition">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-brand-dark py-16 md:py-24">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional tool storage solutions for every trade. 
            From tool bags to work gear, we have everything you need.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div 
                key={category.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors" />
                  <span className="text-6xl opacity-20">🛠️</span>
                  {category.featured && (
                    <span className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    {category.name}
                  </h3>
                  <p className="text-brand-primary text-sm font-medium mb-2">
                    {category.nameCN}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  
                  {/* Product Count */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">
                      {category.products.length} products
                    </span>
                    <span className="text-sm text-gray-400">
                      {category.imageCount}+ images
                    </span>
                  </div>
                  
                  {/* Sample SKUs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.products.slice(0, 3).map((product) => (
                      <span 
                        key={product.sku}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {product.sku}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full btn-primary">
                    View Products
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Custom OEM Solutions?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            We specialize in custom tool bag manufacturing. 
            Contact us for your specific requirements.
          </p>
          <Link href="/contact" className="bg-white text-brand-primary px-8 py-4 rounded-lg font-bold inline-block hover:bg-gray-100 transition">
            Get a Quote
          </Link>
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
