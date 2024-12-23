import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Truck, Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import { useProduct } from '../hooks/useProduct';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { product, loading } = useProduct(id!);
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.reviews} reviews
              </span>
            </div>
          </div>

          <div className="border-t border-b py-4">
            <p className="text-3xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </p>
            <p className="text-sm text-green-600 mt-1">
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="space-y-4 border-t pt-4">
            <div className="flex items-center space-x-3">
              <Truck className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600">
                Free shipping on orders over $100
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600">
                2-year warranty included
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}