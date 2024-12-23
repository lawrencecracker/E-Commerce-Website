import React, { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';
import { stripePromise, formatPrice } from '../utils/stripe';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
}

export function PaymentForm({ amount, onSuccess }: PaymentFormProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatCardNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    const groups = digits.match(/.{1,4}/g);
    return groups ? groups.join(' ') : digits;
  };

  const formatExpiry = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    if (digits.length >= 2) {
      return digits.slice(0, 2) + '/' + digits.slice(2, 4);
    }
    return digits;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);

    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      // In a real application, you would:
      // 1. Send card details to your server
      // 2. Create a payment intent
      // 3. Confirm the payment with Stripe
      // 4. Handle the result

      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Card Number
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                placeholder="4242 4242 4242 4242"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                maxLength={19}
                required
              />
              <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Expiry Date
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                placeholder="MM/YY"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                maxLength={5}
                required
              />
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              CVC
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
                placeholder="123"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                maxLength={3}
                required
              />
            </label>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Amount</span>
          <span className="text-lg font-semibold text-gray-900">{formatPrice(amount)}</span>
        </div>
        <button
          type="submit"
          disabled={processing}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Lock className="h-4 w-4 mr-2" />
          {processing ? 'Processing...' : 'Pay Securely'}
        </button>
      </div>

      <p className="text-xs text-center text-gray-500 mt-4">
        Your payment is secured by Stripe. We never store your card details.
      </p>
    </form>
  );
}