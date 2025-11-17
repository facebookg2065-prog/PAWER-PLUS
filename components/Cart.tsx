
import React from 'react';
import { Trash2, CreditCard, Bitcoin, ArrowLeft, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, onRemove, onUpdateQuantity, onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = items.length > 0 ? 50 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-slate-950 pt-12 pb-12 px-4 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4 flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-red-600" />
            سلة المشتريات
        </h1>

        {items.length === 0 ? (
             <div className="text-center py-20 bg-slate-900/50 rounded-xl border border-slate-800">
                 <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                 <h2 className="text-xl text-gray-300 mb-2">سلة المشتريات فارغة</h2>
                 <p className="text-gray-500">تصفح المتجر وأضف بعض المعدات القوية!</p>
             </div>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Items List */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item) => (
                <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center">
                    <div className="w-24 h-24 bg-slate-950 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-center sm:text-right">
                        <h3 className="text-white font-bold text-lg">{item.name}</h3>
                        <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                        <div className="flex items-center justify-center sm:justify-start gap-4">
                             <span className="text-red-500 font-bold">${item.price * item.quantity}</span>
                             <div className="flex items-center bg-slate-950 rounded border border-slate-800 h-8">
                                <button onClick={() => onUpdateQuantity(item.id, -1)} className="px-3 text-gray-400 hover:text-white hover:bg-slate-800 transition-colors">-</button>
                                <span className="text-sm font-bold text-white px-1 w-8 text-center">{item.quantity}</span>
                                <button onClick={() => onUpdateQuantity(item.id, 1)} className="px-3 text-gray-400 hover:text-white hover:bg-slate-800 transition-colors">+</button>
                             </div>
                        </div>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-gray-500 hover:text-red-500 transition-colors p-2">
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
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <span>الشحن</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <span>الضرائب</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="h-px bg-slate-800 my-4"></div>
                    <div className="flex justify-between text-white font-bold text-lg">
                        <span>الإجمالي</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>

                <button 
                    onClick={onCheckout}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/20 mb-4 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
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
        )}
      </div>
    </div>
  );
};
