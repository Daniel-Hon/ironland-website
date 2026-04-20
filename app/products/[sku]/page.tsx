import Link from 'next/link'
import { productCategories, getProductBySku, getRelatedProducts } from '@/content/products'
import ProductDetailClient from './ProductDetailClient'

// Generate static params for all products
export function generateStaticParams() {
  const skus: { sku: string }[] = []
  productCategories.forEach(category => {
    category.products.forEach(product => {
      skus.push({ sku: product.sku })
    })
  })
  return skus
}

interface ProductDetailPageProps {
  params: { sku: string }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySku(params.sku)
  const relatedProducts = product ? getRelatedProducts(product.sku, 3) : []

  return (
    <ProductDetailClient 
      product={product} 
      relatedProducts={relatedProducts}
      sku={params.sku}
    />
  )
}
