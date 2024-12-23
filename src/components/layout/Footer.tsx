import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About ShopHub</h3>
            <p className="text-sm">
              Your one-stop destination for all your shopping needs. Quality products,
              competitive prices, and excellent customer service.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/cart" className="hover:text-white">Shopping Cart</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white">Return Policy</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                123 Shopping Street, NY 10001
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                support@shophub.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}