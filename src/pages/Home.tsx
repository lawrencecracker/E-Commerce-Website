import React from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { TopCategories } from '../components/home/TopCategories';
import { DealOfTheDay } from '../components/home/DealOfTheDay';
import { ProductCard } from '../components/product/ProductCard';
import { useProducts } from '../hooks/useProducts';

export function Home() {
  const { products, loading: productsLoading } = useProducts();

  return (
    <div className="min-h-screen bg-gray-100">
      <HeroBanner />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <TopCategories />
        
        <DealOfTheDay />

        {/* Trending Products */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending Products</h2>
          {productsLoading ? (
            <div>Loading products...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 8).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* Featured Brands */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center p-4 hover:shadow-md transition-shadow"
              >
                <img
                  src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=200&q=80`}
                  alt={`Brand ${i + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}