
import React from 'react';
import { Sidebar } from './Sidebar';
import { ProductCard } from './ProductCard';
import { FEATURED_PRODUCTS } from '../constants';
import { Product } from '../types';

interface StoreProps {
  onProductClick: (product: Product) => void;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const Store: React.FC<StoreProps> = ({ onProductClick, selectedCategory, onCategorySelect }) => {
  const filteredProducts = selectedCategory === 'all' 
    ? FEATURED_PRODUCTS 
    : FEATURED_PRODUCTS.filter(p => p.category === selectedCategory);

  // Duplicate for visual filling if needed, but usually filter results are enough
  const displayProducts = [...filteredProducts];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col lg:flex-row">
      <Sidebar selectedCategory={selectedCategory} onSelectCategory={onCategorySelect} />
      
      <main className="flex-1 p-6 lg:p-10">
        {/* Banner */}
        <div className="bg-gradient-to-r from-red-900/80 to-slate-900 rounded-2xl p-8 mb-10 relative overflow-hidden">
             <div className="relative z-10">
                 <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedCategory === 'all' ? 'تجهيزات القوات الخاصة' : selectedCategory === 'rifles' ? 'البنادق الهجومية' : selectedCategory === 'pistols' ? 'المسدسات التكتيكية' : 'الإكسسوارات والمعدات'}
                 </h2>
                 <p className="text-gray-200 max-w-xl mb-6">احصل على أحدث المعدات التكتيكية بأفضل الأسعار في السوق. ضمان الجودة والاعتمادية.</p>
                 <button className="bg-white text-red-900 font-bold px-6 py-2 rounded shadow hover:bg-gray-200 transition-colors">تصفح العروض</button>
             </div>
             <div className="absolute right-0 top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20 mix-blend-overlay"></div>
        </div>

        {/* Grid */}
        {displayProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayProducts.map(product => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onClick={onProductClick}
                />
            ))}
            </div>
        ) : (
            <div className="text-center py-20 text-gray-500">
                <p>لا توجد منتجات في هذا القسم حالياً.</p>
            </div>
        )}
      </main>
    </div>
  );
};
