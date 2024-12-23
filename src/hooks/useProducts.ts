import { useState, useEffect } from 'react';
import { Product } from '../types';
import { demoProducts } from '../data/products';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProducts(demoProducts);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch products'));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}