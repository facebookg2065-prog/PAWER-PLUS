
import React from 'react';
import { Product } from '../types';
import { Star, ShoppingCart, ArrowRight, Shield, Target, Scale } from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 p-4 lg:p-8 pt-24 animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
      >
        <ArrowRight className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" />
        العودة للمتجر
      </button>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
        
        {/* Image Section */}
        <div className="relative h-[400px] lg:h-auto bg-slate-950 p-8 flex items-center justify-center overflow-hidden group">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/30 to-transparent"></div>
           <img 
             src={product.image} 
             alt={product.name} 
             className="w-full max-w-lg object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 relative z-10"
           />
           <div className="absolute bottom-4 right-4 flex gap-2">
              {['https://i.imgur.com/thumbnail1.jpg', 'https://i.imgur.com/thumbnail2.jpg'].map((_, i) => (
                  <div key={i} className="w-16 h-16 border border-slate-700 bg-slate-900 rounded-lg flex items-center justify-center cursor-pointer hover:border-red-600 transition-colors">
                     <div className="w-full h-full bg-slate-800 animate-pulse rounded opacity-50"></div>
                  </div>
              ))}
           </div>
        </div>

        {/* Info Section */}
        <div className="p-8 flex flex-col">
          <div className="mb-6">
             <div className="flex items-center justify-between mb-2">
                <span className="text-red-500 font-bold tracking-wider text-sm uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                    {product.category === 'rifles' ? 'بنادق هجومية' : product.category === 'pistols' ? 'مسدسات' : 'إكسسوارات'}
                </span>
                <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="mr-2 text-white font-bold">{product.rating}</span>
                    <span className="text-gray-500 text-sm mr-1">(128 تقييم)</span>
                </div>
             </div>
             <h1 className="text-4xl font-black text-white mb-4">{product.name}</h1>
             <p className="text-gray-400 leading-relaxed text-lg">{product.description}</p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
             <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                <Target className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <div className="text-xs text-gray-500">المدى الفعال</div>
                <div className="font-bold text-white">800m</div>
             </div>
             <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                <Scale className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <div className="text-xs text-gray-500">الوزن</div>
                <div className="font-bold text-white">3.2kg</div>
             </div>
             <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                <Shield className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <div className="text-xs text-gray-500">المتانة</div>
                <div className="font-bold text-white">Mil-Spec</div>
             </div>
          </div>

          <div className="mt-auto border-t border-slate-800 pt-6">
             <div className="flex items-center justify-between mb-6">
                <div>
                    <div className="text-sm text-gray-500 mb-1">السعر الحالي</div>
                    <div className="text-3xl font-black text-white">${product.price}</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center bg-slate-950 rounded-lg border border-slate-800">
                        <button className="px-4 py-2 text-gray-400 hover:text-white hover:bg-slate-900 rounded-r-lg">-</button>
                        <span className="w-8 text-center font-bold">1</span>
                        <button className="px-4 py-2 text-gray-400 hover:text-white hover:bg-slate-900 rounded-l-lg">+</button>
                    </div>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1">
                    <ShoppingCart className="w-5 h-5" />
                    شراء الآن
                </button>
                <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-xl border border-slate-700 transition-colors">
                    إضافة للسلة
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
