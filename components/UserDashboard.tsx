
import React, { useState } from 'react';
import { User, Package, CreditCard, Settings, LogOut, Bitcoin, Grid, Trash2, Edit } from 'lucide-react';
import { Product } from '../types';

interface UserDashboardProps {
    userProducts: Product[];
    onDeleteProduct: (productId: string) => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({ userProducts, onDeleteProduct }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'products'>('overview');

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center mb-6">
                <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-red-600 overflow-hidden">
                    <User className="w-12 h-12 text-gray-400" />
                </div>
                <h2 className="text-xl font-bold text-white">مستخدم نشط</h2>
                <p className="text-gray-500 text-sm">User ID: #88291</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <nav className="flex flex-col">
                    <button 
                        onClick={() => setActiveTab('overview')}
                        className={`flex items-center gap-3 p-4 transition-colors ${activeTab === 'overview' ? 'bg-red-600/10 text-white border-r-4 border-red-600' : 'text-gray-400 hover:bg-slate-800 hover:text-white'}`}
                    >
                        <Package className="w-5 h-5" />
                        <span>طلباتي</span>
                    </button>
                    <button 
                        onClick={() => setActiveTab('products')}
                        className={`flex items-center gap-3 p-4 transition-colors ${activeTab === 'products' ? 'bg-red-600/10 text-white border-r-4 border-red-600' : 'text-gray-400 hover:bg-slate-800 hover:text-white'}`}
                    >
                        <Grid className="w-5 h-5" />
                        <span>منتجاتي (للبيع)</span>
                    </button>
                    <button className="flex items-center gap-3 p-4 text-gray-400 hover:text-white hover:bg-slate-800 transition-colors">
                        <CreditCard className="w-5 h-5" />
                        <span>المحفظة والدفع</span>
                    </button>
                    <button className="flex items-center gap-3 p-4 text-gray-400 hover:text-white hover:bg-slate-800 transition-colors">
                        <Settings className="w-5 h-5" />
                        <span>الإعدادات</span>
                    </button>
                    <button className="flex items-center gap-3 p-4 text-red-400 hover:text-red-300 hover:bg-slate-800 transition-colors border-t border-slate-800">
                        <LogOut className="w-5 h-5" />
                        <span>تسجيل الخروج</span>
                    </button>
                </nav>
            </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-6">
            
            {activeTab === 'overview' && (
                <>
                {/* Wallet Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 text-sm">الرصيد الحالي</span>
                            <Bitcoin className="w-6 h-6 text-orange-500" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">0.0045 BTC</div>
                        <div className="text-green-500 text-sm flex items-center">
                            <span>+2%</span>
                            <span className="mr-1 text-gray-500">هذا الشهر</span>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 text-sm">مشتريات كلية</span>
                            <Package className="w-6 h-6 text-blue-500" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">3 طلبات</div>
                        <div className="text-gray-500 text-sm">
                            آخر طلب منذ يومين
                        </div>
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6">آخر الطلبات</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-gray-500">
                                    #9924
                                </div>
                                <div>
                                    <div className="font-bold text-white">Glock 19 Gen 5</div>
                                    <div className="text-sm text-gray-500">تم الطلب: 20 أكتوبر 2024</div>
                                </div>
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-white">$550.00</div>
                                <div className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-center mt-1">مكتمل</div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}

            {activeTab === 'products' && (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-white">منتجاتي المعروضة للبيع</h3>
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">{userProducts.length} منتج</span>
                    </div>
                    
                    {userProducts.length > 0 ? (
                         <div className="space-y-4">
                            {userProducts.map((product) => (
                                <div key={product.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-red-600/30 transition-colors">
                                    <div className="w-full sm:w-20 h-20 bg-slate-900 rounded-lg overflow-hidden flex-shrink-0">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 text-center sm:text-right">
                                        <h4 className="font-bold text-white">{product.name}</h4>
                                        <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
                                        <div className="text-red-500 font-bold mt-1">${product.price}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 bg-slate-900 hover:bg-slate-800 text-blue-400 rounded-lg transition-colors" title="تعديل">
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <button 
                                            onClick={() => onDeleteProduct(product.id)}
                                            className="p-2 bg-slate-900 hover:bg-red-900/30 text-red-500 rounded-lg transition-colors" 
                                            title="حذف"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                         </div>
                    ) : (
                        <div className="text-center py-12 text-gray-500">
                            <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>لم تقم بعرض أي منتجات للبيع بعد.</p>
                            <p className="text-xs mt-2">اذهب إلى صفحة "البيع" لإضافة منتجك الأول.</p>
                        </div>
                    )}
                </div>
            )}

        </div>
      </div>
    </div>
  );
};
