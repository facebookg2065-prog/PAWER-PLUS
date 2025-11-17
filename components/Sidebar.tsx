import React from 'react';
import { CATEGORIES } from '../constants';
import { Filter } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block w-64 bg-slate-900 border-l border-slate-800 h-full min-h-screen sticky top-20 p-6">
      <div className="flex items-center gap-2 mb-8 text-red-500">
        <Filter className="w-5 h-5" />
        <h3 className="text-xl font-bold text-white">تصفية المنتجات</h3>
      </div>

      <div className="space-y-8">
        {/* Categories */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-4">الأقسام</h4>
          <ul className="space-y-2">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button className="flex items-center w-full p-2 rounded-lg text-gray-300 hover:bg-white/5 hover:text-red-400 transition-colors group">
                  <span className="ml-3 text-gray-500 group-hover:text-red-500 transition-colors">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-4">السعر</h4>
          <div className="px-2">
            <input type="range" className="w-full accent-red-600 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>0 $</span>
              <span>5000 $</span>
            </div>
          </div>
        </div>

        {/* Brands */}
        <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-4">الماركة</h4>
            <div className="space-y-2">
                {['Glock', 'Remington', 'Colt', 'Barrett'].map(brand => (
                    <label key={brand} className="flex items-center cursor-pointer group">
                        <div className="relative flex items-center">
                            <input type="checkbox" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-600 bg-slate-800 transition-all checked:border-red-600 checked:bg-red-600" />
                            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <span className="mr-3 text-sm text-gray-400 group-hover:text-white transition-colors">{brand}</span>
                    </label>
                ))}
            </div>
        </div>
      </div>
    </aside>
  );
};