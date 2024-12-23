import { useState, useEffect } from 'react';
import { Product } from '../types';
import { useProducts } from './useProducts';

export function useProduct(id: string) {
  const { products, loading: productsLoading } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productsLoading) return;
        const found = products.find(p => p.id === id);
        if (!found) throw new Error('Product not found');
        setProduct(found);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch product'));
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, products, productsLoading]);

  return { product, loading: loading || productsLoading, error };
}