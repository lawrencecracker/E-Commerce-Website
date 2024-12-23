import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowLeft, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export function Cart() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleCheckout = () => {
    navigate('/payment', { state: { amount: state.total } });
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {state.items.map(item => (
              <div
                key={item.id}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{formatPrice(item.price)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <Trash2 className="h-5 w-5 text-red-500" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Order Summary
          </h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>{formatPrice(state.total)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold text-gray-900">
                <span>Total</span>
                <span>{formatPrice(state.total)}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}