import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useCurrency } from '../../context/CurrencyContext';
import { formatPrice } from '../../utils/currency';

interface ProductCardProps {
  product: Product & { originalPrice?: number };
  showDiscount?: boolean;
}

export function ProductCard({ product, showDiscount }: ProductCardProps) {
  const { dispatch } = useCart();
  const { currency } = useCurrency();
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 line-clamp-2">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center mb-2">
          <div className="flex items-center bg-green-50 px-2 py-1 rounded">
            <span className="text-sm font-medium text-green-700">{product.rating}</span>
            <Star className="h-4 w-4 text-green-700 fill-green-700 ml-1" />
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviews.toLocaleString()} reviews)
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              {formatPrice(product.price, currency)}
            </span>
            {showDiscount && product.originalPrice && (
              <>
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice, currency)}
                </span>
                <span className="text-sm font-medium text-green-600">
                  {discount}% off
                </span>
              </>
            )}
          </div>

          {product.inStock ? (
            <button
              onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
              className="w-full flex items-center justify-center p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
          ) : (
            <button
              disabled
              className="w-full p-2 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
            >
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
}