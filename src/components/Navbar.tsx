import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { state } = useCart();
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ShopHub</span>
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 max-w-2xl ml-8">
            <div className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/account" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}