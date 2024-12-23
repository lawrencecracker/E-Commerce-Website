import React from 'react';
import { Clock } from 'lucide-react';
import { ProductCard } from '../product/ProductCard';
import { useProducts } from '../../hooks/useProducts';

export function DealOfTheDay() {
  const { products } = useProducts();
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 10,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Deal of the Day</h2>
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="h-5 w-5" />
          <span className="font-medium">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              price: product.price * 0.7, // 30% discount
              originalPrice: product.price
            }}
            showDiscount
          />
        ))}
      </div>
    </div>
  );
}