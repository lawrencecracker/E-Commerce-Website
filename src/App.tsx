import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AuthModal } from './components/auth/AuthModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { PaymentGateway } from './pages/PaymentGateway';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <CurrencyProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar onAuthClick={() => setIsAuthModalOpen(true)} />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<PaymentGateway />} />
              </Routes>
            </main>
            <Footer />
            <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
          </div>
        </CartProvider>
      </CurrencyProvider>
    </BrowserRouter>
  );
}

export default App;