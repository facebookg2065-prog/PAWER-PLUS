
import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Star, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={() => onClick?.(product)}
      className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 cursor-pointer"
    >
      {/* Image Area */}
      <div className="relative h-52 overflow-hidden bg-slate-950">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">جديد</div>
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <button className="bg-white text-black p-2 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                 <Eye className="w-5 h-5" />
             </button>
             <button className="bg-white text-black p-2 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                 <ShoppingCart className="w-5 h-5" />
             </button>
        </div>
      </div>

      {/* Details Area */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
             <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors truncate">{product.name}</h3>
             <div className="flex items-center text-yellow-500 text-xs">
                 <Star className="w-3 h-3 fill-current" />
                 <span className="mr-1">{product.rating}</span>
             </div>
        </div>
        <p className="text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-black text-white font-mono">${product.price}</span>
          <button className="text-xs font-bold uppercase tracking-wider text-red-500 hover:text-white transition-colors border border-red-500/30 px-3 py-1 rounded hover:bg-red-600">
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  );
};
