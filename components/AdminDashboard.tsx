
import React, { useState } from 'react';
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart, Settings, Search, Plus, Edit, Trash2, LogOut } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../constants';

export const AdminDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'users'>('overview');

    // Mock Data for stats
    const stats = [
        { label: 'إجمالي المبيعات', value: '$124,500', change: '+14%', icon: <BarChart className="w-6 h-6 text-green-500" /> },
        { label: 'الطلبات النشطة', value: '45', change: '+2', icon: <ShoppingCart className="w-6 h-6 text-orange-500" /> },
        { label: 'المنتجات', value: '128', change: '+12', icon: <Package className="w-6 h-6 text-blue-500" /> },
        { label: 'المستخدمين', value: '1,250', change: '+5%', icon: <Users className="w-6 h-6 text-purple-500" /> },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white flex font-sans" dir="rtl">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-l border-slate-800 hidden lg:flex flex-col fixed h-full right-0 top-0 z-20 pt-20">
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-red-600/20">
                            AD
                        </div>
                        <div>
                            <h3 className="font-bold">لوحة الإدارة</h3>
                            <p className="text-xs text-gray-500">Admin: Abdullah</p>
                        </div>
                    </div>

                    <nav className="space-y-2">
                        <button 
                            onClick={() => setActiveTab('overview')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'overview' ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' : 'text-gray-400 hover:bg-slate-800 hover:text-white'}`}
                        >
                            <LayoutDashboard className="w-5 h-5" />
                            <span>نظرة عامة</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab('products')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'products' ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' : 'text-gray-400 hover:bg-slate-800 hover:text-white'}`}
                        >
                            <Package className="w-5 h-5" />
                            <span>المنتجات</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab('orders')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'orders' ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' : 'text-gray-400 hover:bg-slate-800 hover:text-white'}`}
                        >
                            <ShoppingCart className="w-5 h-5" />
                            <span>الطلبات</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab('users')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'users' ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' : 'text-gray-400 hover:bg-slate-800 hover:text-white'}`}
                        >
                            <Users className="w-5 h-5" />
                            <span>المستخدمين</span>
                        </button>
                    </nav>
                </div>

                <div className="mt-auto p-6 border-t border-slate-800">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors">
                        <LogOut className="w-5 h-5" />
                        <span>تسجيل الخروج</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:mr-64 p-8 pt-24 animate-fade-in">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-black text-white">
                        {activeTab === 'overview' && 'نظرة عامة'}
                        {activeTab === 'products' && 'إدارة المنتجات'}
                        {activeTab === 'orders' && 'الطلبات الواردة'}
                        {activeTab === 'users' && 'المستخدمين المسجلين'}
                    </h1>
                    <div className="flex items-center gap-4">
                        <button className="p-2 bg-slate-900 border border-slate-800 rounded-full hover:bg-slate-800">
                            <Settings className="w-5 h-5 text-gray-400" />
                        </button>
                        <div className="w-10 h-10 bg-slate-800 rounded-full border border-slate-700 overflow-hidden">
                            <img src="https://ui-avatars.com/api/?name=Abdullah&background=DC2626&color=fff" alt="Admin" />
                        </div>
                    </div>
                </div>

                {/* Content Switching */}
                {activeTab === 'overview' && (
                    <div className="space-y-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-red-600/30 transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                                            {stat.icon}
                                        </div>
                                        <span className="text-green-500 text-sm font-bold bg-green-500/10 px-2 py-1 rounded">{stat.change}</span>
                                    </div>
                                    <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Activity Chart Placeholder */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                <h3 className="text-xl font-bold mb-6">تحليل المبيعات</h3>
                                <div className="h-64 flex items-end gap-4 px-4">
                                    {[40, 70, 45, 90, 60, 80, 50, 75, 65, 95].map((h, i) => (
                                        <div key={i} className="flex-1 bg-slate-800 hover:bg-red-600 transition-colors rounded-t-lg relative group" style={{ height: `${h}%` }}>
                                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                ${h * 100}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4 text-gray-500 text-xs">
                                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
                                    <span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
                                </div>
                            </div>
                            
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                <h3 className="text-xl font-bold mb-6">أحدث العمليات</h3>
                                <div className="space-y-4">
                                    {[1,2,3,4,5].map(i => (
                                        <div key={i} className="flex items-center gap-4 p-3 bg-slate-950 rounded-xl border border-slate-800">
                                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-red-500 font-bold">#{i}</div>
                                            <div>
                                                <div className="text-white font-bold text-sm">بيع سلاح M4A1</div>
                                                <div className="text-xs text-gray-500">قبل 5 دقائق</div>
                                            </div>
                                            <div className="mr-auto font-bold text-green-500">+$1200</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'products' && (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                            <div className="relative">
                                <input type="text" placeholder="بحث عن منتج..." className="bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:border-red-600 w-64" />
                                <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold transition-colors">
                                <Plus className="w-4 h-4" />
                                إضافة منتج جديد
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-right">
                                <thead className="bg-slate-950 text-gray-400 text-sm uppercase">
                                    <tr>
                                        <th className="px-6 py-4">المنتج</th>
                                        <th className="px-6 py-4">القسم</th>
                                        <th className="px-6 py-4">السعر</th>
                                        <th className="px-6 py-4">المخزون</th>
                                        <th className="px-6 py-4">الحالة</th>
                                        <th className="px-6 py-4">إجراءات</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {FEATURED_PRODUCTS.map((product) => (
                                        <tr key={product.id} className="hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img src={product.image} alt="" className="w-10 h-10 rounded object-cover bg-slate-800" />
                                                    <span className="font-bold text-white">{product.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-400">{product.category}</td>
                                            <td className="px-6 py-4 font-mono text-white">${product.price}</td>
                                            <td className="px-6 py-4 text-white">{product.stock || 15}</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs">متوفر</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <button className="p-2 hover:bg-slate-800 rounded text-blue-400"><Edit className="w-4 h-4" /></button>
                                                    <button className="p-2 hover:bg-slate-800 rounded text-red-500"><Trash2 className="w-4 h-4" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                
                {/* Placeholder for Orders/Users similarly structured */}
                {(activeTab === 'orders' || activeTab === 'users') && (
                     <div className="text-center py-20 bg-slate-900 border border-slate-800 rounded-2xl">
                        <Settings className="w-16 h-16 text-slate-800 mx-auto mb-4 animate-spin-slow" />
                        <h3 className="text-xl text-gray-400">هذا القسم قيد التطوير حالياً</h3>
                     </div>
                )}
            </main>
        </div>
    );
};
