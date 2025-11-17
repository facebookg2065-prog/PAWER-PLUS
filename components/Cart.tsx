
import React from 'react';
import { Trash2, CreditCard, Bitcoin, ArrowLeft } from 'lucide-react';

export const Cart: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">سلة المشتريات</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Items List */}
          <div className="lg:col-span-8 space-y-4">
            {[1, 2].map((item) => (
                <div key={item} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-center">
                    <div className="w-24 h-24 bg-slate-950 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&q=80&w=200" alt="Item" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-bold text-lg">M4A1 Tactical Custom</h3>
                        <p className="text-gray-500 text-sm mb-2">خيارات: منظار ليلي، كاتم صوت</p>
                        <div className="flex items-center gap-4">
                             <span className="text-red-500 font-bold">$1,200.00</span>
                             <div className="flex items-center bg-slate-950 rounded border border-slate-800 h-8">
                                <button className="px-3 text-gray-400 hover:text-white">-</button>
                                <span className="text-sm font-bold text-white px-1">1</span>
                                <button className="px-3 text-gray-400 hover:text-white">+</button>
                             </div>
                        </div>
                    </div>
                    <button className="text-gray-500 hover:text-red-500 transition-colors p-2">
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">ملخص الطلب</h3>
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-400">
                        <span>المجموع الفرعي</span>
                        <span>$2,400.00</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <span>الشحن</span>
                        <span>$50.00</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <span>الضرائب</span>
                        <span>$120.00</span>
                    </div>
                    <div className="h-px bg-slate-800 my-4"></div>
                    <div className="flex justify-between text-white font-bold text-lg">
                        <span>الإجمالي</span>
                        <span>$2,570.00</span>
                    </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/20 mb-4 transition-all flex items-center justify-center gap-2">
                    <span>إتمام الشراء</span>
                    <ArrowLeft className="w-5 h-5" />
                </button>

                <div className="text-center text-gray-500 text-xs mb-4">أو ادفع باستخدام</div>
                
                <div className="grid grid-cols-2 gap-2">
                    <button className="bg-slate-950 border border-slate-800 hover:border-orange-500/50 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                        <Bitcoin className="w-4 h-4 text-orange-500" />
                        <span>Crypto</span>
                    </button>
                    <button className="bg-slate-950 border border-slate-800 hover:border-blue-500/50 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                        <CreditCard className="w-4 h-4 text-blue-500" />
                        <span>Card</span>
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
