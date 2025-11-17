
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, LogIn, Shield } from 'lucide-react';
import { ViewState, UserRole } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  cartCount?: number;
  onSearch?: (query: string) => void;
  userRole?: UserRole;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView, cartCount = 0, onSearch, userRole = 'guest' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setView('home')}>
            <h1 className="text-2xl font-black tracking-widest uppercase">
              <span className="text-white">POWER</span> <span className="text-red-600">PLUS</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
              <button 
                onClick={() => setView('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentView === 'home' ? 'text-red-500' : 'text-gray-300 hover:text-white'}`}
              >
                الرئيسية
              </button>
              <button 
                onClick={() => setView('store')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentView === 'store' ? 'text-red-500' : 'text-gray-300 hover:text-white'}`}
              >
                المتجر
              </button>
              <button 
                onClick={() => setView('cart')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentView === 'cart' ? 'text-red-500' : 'text-gray-300 hover:text-white'}`}
              >
                الشراء
              </button>
              <button 
                onClick={() => setView('sell')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentView === 'sell' ? 'text-red-500' : 'text-gray-300 hover:text-white'}`}
              >
                البيع
              </button>
            </div>
          </div>

          {/* Search and Icons */}
          <div className="hidden md:flex items-center gap-6">
             <div className="relative hidden lg:block">
                <input 
                    type="text" 
                    placeholder="بحث عن منتجات..." 
                    onChange={(e) => onSearch?.(e.target.value)}
                    className="bg-gray-900/50 border border-gray-700 rounded-full py-1 px-4 pr-10 text-sm focus:outline-none focus:border-red-600 w-64 text-right placeholder-gray-500 transition-all focus:w-72"
                />
                <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
             </div>
             <div className="flex items-center space-x-4 space-x-reverse border-r border-gray-700 pr-4">
                 <button 
                    onClick={() => setView('cart')}
                    className={`text-gray-300 hover:text-red-500 transition-colors relative ${currentView === 'cart' ? 'text-red-500' : ''}`}
                 >
                    <ShoppingCart className="w-5 h-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full w-4 h-4 flex items-center justify-center text-white animate-bounce">{cartCount}</span>
                    )}
                 </button>
                 
                 {userRole !== 'guest' ? (
                   <button 
                      onClick={() => setView(userRole === 'admin' ? 'admin' : 'dashboard')}
                      className={`text-gray-300 hover:text-red-500 transition-colors ${(currentView === 'dashboard' || currentView === 'admin') ? 'text-red-500' : ''}`}
                      title={userRole === 'admin' ? 'لوحة الإدارة' : 'حسابي'}
                   >
                      {userRole === 'admin' ? <Shield className="w-5 h-5" /> : <User className="w-5 h-5" />}
                   </button>
                 ) : (
                   <button 
                      onClick={() => setView('login')}
                      className={`text-gray-300 hover:text-red-500 transition-colors ${currentView === 'login' ? 'text-red-500' : ''}`}
                      title="تسجيل الدخول"
                   >
                      <LogIn className="w-5 h-5" />
                   </button>
                 )}
             </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => { setView('home'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-right">الرئيسية</button>
            <button onClick={() => { setView('store'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-right">المتجر</button>
            <button onClick={() => { setView('cart'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-right">الشراء</button>
            <button onClick={() => { setView('sell'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-right">البيع</button>
            
            {userRole === 'admin' ? (
                 <button onClick={() => { setView('admin'); setIsMenuOpen(false); }} className="text-red-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-right">لوحة الإدارة</button>
            ) : userRole === 'user' ? (
                 <button onClick={() => { setView('dashboard'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-right">الحساب</button>
            ) : (
                 <button onClick={() => { setView('login'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-right">تسجيل الدخول</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
