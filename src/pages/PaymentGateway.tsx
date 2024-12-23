import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { PaymentForm } from '../components/PaymentForm';

export function PaymentGateway() {
  const location = useLocation();
  const amount = location.state?.amount;

  if (!amount) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-blue-600 text-white">
            <h2 className="text-xl font-semibold">Secure Payment</h2>
          </div>
          <div className="p-6">
            <PaymentForm amount={amount} onSuccess={() => console.log('Payment successful')} />
          </div>
        </div>
      </div>
    </div>
  );
}