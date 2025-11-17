
import React from 'react';
import { User, Package, CreditCard, Settings, LogOut, Bitcoin } from 'lucide-react';

export const UserDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center mb-6">
                <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-red-600">
                    <User className="w-12 h-12 text-gray-400" />
                </div>
                <h2 className="text-xl font-bold text-white">القائد الميداني</h2>
                <p className="text-gray-500 text-sm">المستوى: محترف (Tier 1)</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <nav className="flex flex-col">
                    <button className="flex items-center gap-3 p-4 text-white bg-red-600/10 border-r-4 border-red-600">
                        <Package className="w-5 h-5" />
                        <span>طلباتي</span>
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
            
            {/* Wallet Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 text-sm">الرصيد الحالي</span>
                        <Bitcoin className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">2.45 BTC</div>
                    <div className="text-green-500 text-sm flex items-center">
                        <span>+12%</span>
                        <span className="mr-1 text-gray-500">هذا الشهر</span>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 text-sm">مشتريات كلية</span>
                        <Package className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">14 طلب</div>
                    <div className="text-gray-500 text-sm">
                        آخر طلب منذ يومين
                    </div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 text-sm">نطاق الولاء</span>
                        <User className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">ذهبي</div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3">
                        <div className="bg-red-600 h-1.5 rounded-full w-3/4"></div>
                    </div>
                </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">آخر الطلبات</h3>
                <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                        <div key={order} className="flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-gray-500">
                                    #{order}24
                                </div>
                                <div>
                                    <div className="font-bold text-white">M4A1 Tactical Bundle</div>
                                    <div className="text-sm text-gray-500">تم الطلب: 12 أكتوبر 2024</div>
                                </div>
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-white">$1,200.00</div>
                                <div className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-center mt-1">مكتمل</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
