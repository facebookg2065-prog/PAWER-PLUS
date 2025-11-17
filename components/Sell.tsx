
import React, { useState } from 'react';
import { Upload, DollarSign, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { Product } from '../types';

interface SellProps {
    onAddProduct: (product: Omit<Product, 'id'>) => void;
}

export const Sell: React.FC<SellProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('rifles');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
          setImageFile(file);
          setPreviewUrl(URL.createObjectURL(file));
      }
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setError('');

      if (!name || !description || !price || !imageFile) {
          setError('يرجى ملء جميع الحقول المطلوبة وإرفاق صورة.');
          return;
      }

      // Create product object
      // Note: In a real app, you would upload the image to a server here
      const newProduct: Omit<Product, 'id'> = {
          name,
          category: category as any,
          description,
          price: parseFloat(price),
          image: previewUrl || '',
          rating: 5, // Default rating for new items
          stock: 1,
      };

      onAddProduct(newProduct);
      
      // Reset form
      setName('');
      setDescription('');
      setPrice('');
      setImageFile(null);
      setPreviewUrl(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-12 pb-12 px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-black text-white mb-4">اعرض سلاحك للبيع</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">هل تمتلك معدات فائضة؟ اعرضها للبيع في سوق Power Plus واصل لملايين المشترين المحترفين.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                <form className="space-y-8" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300">اسم المنتج</label>
                            <input 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none transition-colors" 
                                placeholder="مثال: Glock 19 Gen 5" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300">القسم</label>
                            <select 
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none transition-colors"
                            >
                                <option value="rifles">بنادق هجومية</option>
                                <option value="pistols">مسدسات</option>
                                <option value="accessories">إكسسوارات</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-300">الوصف والحالة</label>
                        <textarea 
                            rows={4} 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none transition-colors" 
                            placeholder="اكتب وصفاً دقيقاً لحالة السلاح والمواصفات..."
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300">السعر المطلوب ($)</label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input 
                                    type="number" 
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 pl-10 text-white focus:border-red-600 focus:outline-none transition-colors" 
                                    placeholder="0.00" 
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300">صور المنتج</label>
                            <label className="border-2 border-dashed border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-red-600 transition-colors bg-slate-950/50 overflow-hidden relative h-32">
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                                {previewUrl ? (
                                    <img src={previewUrl} alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-80 transition-opacity" />
                                ) : (
                                    <>
                                        <Upload className="w-8 h-8 text-gray-500 mb-2" />
                                        <span className="text-xs text-gray-400">اضغط لرفع الصور أو اسحبها هنا</span>
                                    </>
                                )}
                            </label>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                        <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            إرسال للمراجعة والعرض
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};
