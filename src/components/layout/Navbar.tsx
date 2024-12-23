import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User, Heart, Bell } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface NavbarProps {
  onAuthClick: () => void;
}

export function Navbar({ onAuthClick }: NavbarProps) {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-blue-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md lg:hidden text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">ShopHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-white hover:text-blue-100">Home</Link>
            <Link to="/about" className="text-white hover:text-blue-100">About</Link>
            <Link to="/contact" className="text-white hover:text-blue-100">Contact</Link>
          </div>

          <div className="hidden lg:flex flex-1 max-w-2xl ml-8">
            <div className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onAuthClick}
              className="flex flex-col items-center text-white"
            >
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">Sign In</span>
            </button>
            
            <Link to="/wishlist" className="flex flex-col items-center text-white">
              <Heart className="h-6 w-6" />
              <span className="text-xs mt-1">Wishlist</span>
            </Link>

            <Link to="/cart" className="flex flex-col items-center text-white relative">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-blue-600 text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
              <span className="text-xs mt-1">Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-2 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}