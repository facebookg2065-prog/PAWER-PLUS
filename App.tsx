
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Store } from './components/Store';
import { ProductDetails } from './components/ProductDetails';
import { UserDashboard } from './components/UserDashboard';
import { Cart } from './components/Cart';
import { ViewState, Product } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-red-600 selection:text-white font-sans" dir="rtl">
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <div className="animate-fade-in">
        {currentView === 'home' && <Hero />}
        {currentView === 'store' && <Store onProductClick={handleProductClick} />}
        {currentView === 'product' && selectedProduct && (
            <ProductDetails 
                product={selectedProduct} 
                onBack={() => setCurrentView('store')} 
            />
        )}
        {currentView === 'dashboard' && <UserDashboard />}
        {currentView === 'cart' && <Cart />}
      </div>
    </div>
  );
};

export default App;
