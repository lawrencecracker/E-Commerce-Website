import { useState, useEffect } from 'react';

interface CurrencyInfo {
  code: string;
  symbol: string;
  rate: number;
}

const DEFAULT_CURRENCY: CurrencyInfo = {
  code: 'USD',
  symbol: '$',
  rate: 1
};

// Exchange rates relative to USD (for demo purposes)
const EXCHANGE_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 110.5,
  INR: 74.5,
  AUD: 1.35,
  CAD: 1.25
};

export const formatPrice = (amount: number, currency: CurrencyInfo): string => {
  const convertedAmount = amount * currency.rate;
  
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: currency.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(convertedAmount);
};

export const detectUserCurrency = async (): Promise<CurrencyInfo> => {
  try {
    // In a real app, you would use a geolocation API to get the user's country
    const userLanguage = navigator.language;
    const userCountry = userLanguage.split('-')[1] || 'US';
    
    // Map country to currency code (simplified)
    const currencyMap: Record<string, string> = {
      US: 'USD',
      GB: 'GBP',
      EU: 'EUR',
      JP: 'JPY',
      IN: 'INR',
      AU: 'AUD',
      CA: 'CAD'
    };

    const currencyCode = currencyMap[userCountry] || 'USD';
    
    return {
      code: currencyCode,
      symbol: new Intl.NumberFormat(userLanguage, {
        style: 'currency',
        currency: currencyCode
      }).format(0)[0],
      rate: EXCHANGE_RATES[currencyCode] || 1
    };
  } catch (error) {
    return DEFAULT_CURRENCY;
  }
};