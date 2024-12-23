import { useState, useEffect } from 'react';
import { Category } from '../types';

// Simulated category data
const MOCK_CATEGORIES: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80'
  },
  // Add more categories as needed
];

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCategories(MOCK_CATEGORIES);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch categories'));
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}