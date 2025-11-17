
import React, { useState } from 'react';
import { ArrowRight, CreditCard, Bitcoin, Wallet, CheckCircle, ShieldCheck } from 'lucide-react';

interface CheckoutProps {
    onBack: () => void;
    onComplete: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onBack, onComplete }) => {
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto' | 'paypal' | 'wire'>('card');
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            onComplete();
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-950 pt-12 pb-12 px-4 animate-fade-in">
            <div className="max-w-3xl mx-auto">
                <button onClick={onBack} className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                    <ArrowRight className="w-4 h-4 ml-2" />
                    العودة للسلة
                </button>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="p-8 border-b border-slate-800">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <ShieldCheck className="w-8 h-8 text-green-500" />
                            إتمام الطلب والدفع
                        </h2>
                        <p className="text-gray-400 mt-2">جميع المعاملات مشفرة ومحمية بتقنية SSL.</p>
                    </div>

                    <div className="p-8">
                        <h3 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-4">اختر طريقة الدفع</h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <button 
                                onClick={() => setPaymentMethod('card')}
                                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all ${paymentMethod === 'card' ? 'bg-red-600/10 border-red-600 text-white' : 'bg-slate-950 border-slate-800 text-gray-400 hover:border-slate-600'}`}
                            >
                                <CreditCard className="w-8 h-8" />
                                <span className="text-sm font-bold">بطاقة ائتمان</span>
                            </button>
                            <button 
                                onClick={() => setPaymentMethod('crypto')}
                                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all ${paymentMethod === 'crypto' ? 'bg-orange-600/10 border-orange-500 text-white' : 'bg-slate-950 border-slate-800 text-gray-400 hover:border-slate-600'}`}
                            >
                                <Bitcoin className="w-8 h-8" />
                                <span className="text-sm font-bold">Crypto</span>
                            </button>
                            <button 
                                onClick={() => setPaymentMethod('paypal')}
                                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all ${paymentMethod === 'paypal' ? 'bg-blue-600/10 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-gray-400 hover:border-slate-600'}`}
                            >
                                <Wallet className="w-8 h-8" />
                                <span className="text-sm font-bold">PayPal</span>
                            </button>
                            <button 
                                onClick={() => setPaymentMethod('wire')}
                                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all ${paymentMethod === 'wire' ? 'bg-gray-600/10 border-gray-500 text-white' : 'bg-slate-950 border-slate-800 text-gray-400 hover:border-slate-600'}`}
                            >
                                <span className="text-xl font-serif font-bold">Bank</span>
                                <span className="text-sm font-bold">تحويل بنكي</span>
                            </button>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="space-y-2">
                                <label className="text-xs text-gray-400 uppercase font-bold">رقم البطاقة / المحفظة</label>
                                <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none" placeholder={paymentMethod === 'crypto' ? 'Wallet Address' : '0000 0000 0000 0000'} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400 uppercase font-bold">{paymentMethod === 'crypto' ? 'Network' : 'تاريخ الانتهاء'}</label>
                                    <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none" placeholder={paymentMethod === 'crypto' ? 'ERC20' : 'MM/YY'} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400 uppercase font-bold">CVC / CVV</label>
                                    <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none" placeholder="123" />
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={handlePayment}
                            disabled={isProcessing}
                            className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isProcessing ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>جاري المعالجة...</span>
                                </>
                            ) : (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    <span>تأكيد الدفع الآن</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
