import React, { createContext, useContext, useState, useEffect } from 'react';
import { detectUserCurrency } from '../utils/currency';

interface CurrencyInfo {
  code: string;
  symbol: string;
  rate: number;
}

interface CurrencyContextType {
  currency: CurrencyInfo;
  setCurrency: (currency: CurrencyInfo) => void;
}

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyInfo>({
    code: 'USD',
    symbol: '$',
    rate: 1
  });

  useEffect(() => {
    detectUserCurrency().then(setCurrency);
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}