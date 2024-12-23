import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="ml-1 text-sm text-gray-600">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
            className="flex items-center justify-center p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}