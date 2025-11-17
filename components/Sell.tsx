
import React from 'react';
import { Upload, DollarSign, FileText } from 'lucide-react';

export const Sell: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-12 pb-12 px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-black text-white mb-4">اعرض سلاحك للبيع</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">هل تمتلك معدات فائضة؟ اعرضها للبيع في سوق Power Plus واصل لملايين المشترين المحترفين.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300">اسم المنتج</label>
                            <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="مثال: Glock 19 Gen 5" />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300">القسم</label>
                            <select className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none transition-colors">
                                <option>بنادق هجومية</option>
                                <option>مسدسات</option>
                                <option>إكسسوارات</option>
                                <option>دروع</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-300">الوصف والحالة</label>
                        <textarea rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="اكتب وصفاً دقيقاً لحالة السلاح والمواصفات..."></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300">السعر المطلوب ($)</label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input type="number" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 pl-10 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="0.00" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300">صور المنتج</label>
                            <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-red-600 transition-colors bg-slate-950/50">
                                <Upload className="w-8 h-8 text-gray-500 mb-2" />
                                <span className="text-xs text-gray-400">اضغط لرفع الصور أو اسحبها هنا</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                        <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5">
                            إرسال للمراجعة والعرض
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};
