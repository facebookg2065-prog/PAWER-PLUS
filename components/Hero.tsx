import React from 'react';
import { Bitcoin, CreditCard, Wallet } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-slate-950">
        
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-full h-64 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Weapon Showcase (Visually Left in LTR, Right in RTL logic but sticking to image layout) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start relative order-2 lg:order-1">
           {/* The big title visible in the image backdrop */}
           <h1 className="absolute -top-40 left-1/2 transform -translate-x-1/2 text-[120px] font-black text-white/5 whitespace-nowrap select-none pointer-events-none z-0">
             POWER PLUS
           </h1>

           {/* Gun Presentation Stand */}
           <div className="relative w-full max-w-2xl h-[500px] perspective-1000 group">
                {/* Glowing Platform */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-12 bg-gray-900 rounded-[100%] shadow-[0_-10px_40px_rgba(220,38,38,0.3)] border-t border-red-900/50"></div>
                
                {/* Gun 1: Rifle (Top) */}
                <div className="absolute top-10 right-10 w-3/4 transition-all duration-1000 transform group-hover:scale-105 group-hover:-translate-y-2">
                    <img 
                        src="https://pngimg.com/uploads/assault_rifle/assault_rifle_PNG32.png" 
                        alt="Assault Rifle" 
                        className="w-full drop-shadow-2xl filter brightness-75 hover:brightness-100 transition-all"
                    />
                </div>
                 
                {/* Gun 2: Sniper (Bottom) */}
                <div className="absolute bottom-20 left-0 w-full transition-all duration-1000 delay-150 transform group-hover:scale-105 group-hover:translate-x-2">
                     <img 
                        src="https://pngimg.com/uploads/sniper_rifle/sniper_rifle_PNG35.png" 
                        alt="Sniper Rifle" 
                        className="w-full drop-shadow-2xl filter brightness-75 hover:brightness-100 transition-all"
                    />
                </div>
           </div>
        </div>

        {/* Right Side: Login Card (Matching the image) */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl shadow-black/50 relative overflow-hidden">
            {/* Decorative Top Highlight */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

            <h2 className="text-3xl font-bold text-white mb-8 text-center">تسجيل الدخول</h2>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold">كلمة المرور</label>
                <input 
                  type="password" 
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                  placeholder="••••••••"
                />
              </div>

              <button 
                type="button"
                className="w-full bg-gradient-to-r from-red-700 to-red-600 text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-red-600/30 hover:from-red-600 hover:to-red-500 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                تسجيل الدخول
              </button>

              <button 
                type="button"
                className="w-full bg-slate-800/50 border border-slate-600 text-gray-300 font-medium py-3.5 rounded-lg hover:bg-slate-800 hover:text-white transition-all"
              >
                إنشاء حساب جديد
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Payment Methods */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center items-center gap-8 text-gray-500 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
         <div className="flex items-center gap-2">
             <Bitcoin className="w-6 h-6 text-orange-500" />
             <span className="font-bold text-sm">Crypto</span>
         </div>
         <div className="flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-blue-400" />
            <span className="font-bold text-sm">ETE</span>
         </div>
         <div className="flex items-center gap-2">
            <span className="font-bold text-lg italic text-blue-600">PayPal</span>
         </div>
         <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-white">PAYEER</span>
         </div>
      </div>
    </div>
  );
};
