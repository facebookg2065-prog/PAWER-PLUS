
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Store } from './components/Store';
import { ProductDetails } from './components/ProductDetails';
import { UserDashboard } from './components/UserDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Sell } from './components/Sell';
import { Auth } from './components/Auth';
import { Toast } from './components/Toast';
import { ViewState, Product, CartItem, UserRole } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [userRole, setUserRole] = useState<UserRole>('guest');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = (role: UserRole) => {
      setUserRole(role);
      if (role === 'admin') {
          setCurrentView('admin');
          showToast('مرحباً بك، مدير النظام', 'success');
      } else {
          setCurrentView('dashboard');
          showToast('تم تسجيل الدخول بنجاح', 'success');
      }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('store');
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`تمت إضافة ${product.name} للسلة`);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-red-600 selection:text-white font-sans" dir="rtl">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      {currentView !== 'admin' && (
          <Navbar 
            currentView={currentView} 
            setView={setCurrentView} 
            cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
            onSearch={setSearchQuery}
            userRole={userRole}
          />
      )}
      
      <div className="animate-fade-in">
        {currentView === 'home' && <Hero setView={setCurrentView} />}
        
        {currentView === 'store' && (
          <Store 
            onProductClick={handleProductClick} 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            searchQuery={searchQuery}
          />
        )}
        
        {currentView === 'product' && selectedProduct && (
            <ProductDetails 
                product={selectedProduct} 
                onBack={() => setCurrentView('store')} 
                onAddToCart={() => addToCart(selectedProduct)}
                onBuyNow={() => {
                  addToCart(selectedProduct);
                  setCurrentView('cart');
                }}
            />
        )}
        
        {currentView === 'dashboard' && <UserDashboard />}
        
        {currentView === 'admin' && <AdminDashboard />}
        
        {currentView === 'cart' && (
          <Cart 
            items={cart} 
            onRemove={removeFromCart} 
            onUpdateQuantity={updateQuantity}
            onCheckout={() => setCurrentView('checkout')}
          />
        )}

        {currentView === 'checkout' && <Checkout onBack={() => setCurrentView('cart')} onComplete={() => {
            showToast('تم الدفع بنجاح! شكراً لطلبك', 'success');
            setCart([]);
            setCurrentView('dashboard');
        }} />}
        
        {currentView === 'sell' && <Sell />}
        
        {(currentView === 'login' || currentView === 'register') && (
          <Auth view={currentView} setView={setCurrentView} onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
