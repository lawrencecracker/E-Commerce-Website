import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Mobiles', 'Laptops', 'Audio', 'Cameras']
  },
  {
    id: 'fashion',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Men', 'Women', 'Kids', 'Accessories']
  },
  {
    id: 'home',
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Furniture', 'Decor', 'Kitchen', 'Lighting']
  },
  {
    id: 'beauty',
    name: 'Beauty',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Makeup', 'Skincare', 'Haircare', 'Fragrances']
  }
];

export function TopCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white rounded-lg shadow-sm">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="group p-4 text-center hover:shadow-lg rounded-lg transition-shadow"
        >
          <div className="relative w-20 h-20 mx-auto mb-4">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
          <ul className="space-y-1">
            {category.subcategories.map((sub) => (
              <li key={sub} className="text-sm text-gray-600 hover:text-blue-600">
                {sub}
              </li>
            ))}
          </ul>
        </Link>
      ))}
    </div>
  );
}