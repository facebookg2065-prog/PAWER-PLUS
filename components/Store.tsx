
import React from 'react';
import { Sidebar } from './Sidebar';
import { ProductCard } from './ProductCard';
import { FEATURED_PRODUCTS } from '../constants';
import { Product } from '../types';

interface StoreProps {
  onProductClick: (product: Product) => void;
}

export const Store: React.FC<StoreProps> = ({ onProductClick }) => {
  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar />
      
      <main className="flex-1 p-6 lg:p-10">
        {/* Banner */}
        <div className="bg-gradient-to-r from-red-900/80 to-slate-900 rounded-2xl p-8 mb-10 relative overflow-hidden">
             <div className="relative z-10">
                 <h2 className="text-3xl font-bold text-white mb-2">تجهيزات القوات الخاصة</h2>
                 <p className="text-gray-200 max-w-xl mb-6">احصل على أحدث المعدات التكتيكية بأفضل الأسعار في السوق. ضمان الجودة والاعتمادية.</p>
                 <button className="bg-white text-red-900 font-bold px-6 py-2 rounded shadow hover:bg-gray-200 transition-colors">تصفح العروض</button>
             </div>
             <div className="absolute right-0 top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20 mix-blend-overlay"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map(product => (
            <ProductCard 
                key={product.id} 
                product={product} 
                onClick={onProductClick}
            />
          ))}
          {/* Duplicates for visual fullness */}
          {FEATURED_PRODUCTS.map(product => (
             <ProductCard 
                key={`duplicate-${product.id}`} 
                product={{...product, id: `dup-${product.id}`}} 
                onClick={onProductClick}
             />
          ))}
        </div>
      </main>
    </div>
  );
};
