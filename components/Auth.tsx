
import React, { useState } from 'react';
import { ViewState, UserRole } from '../types';
import { AlertCircle } from 'lucide-react';

interface AuthProps {
    view: 'login' | 'register';
    setView: (view: ViewState) => void;
    onLogin: (role: UserRole) => void;
}

export const Auth: React.FC<AuthProps> = ({ view, setView, onLogin }) => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (view === 'login') {
            // Admin Check Logic based on provided credentials
            if (identifier === 'abdullah' && password === '735686735') {
                onLogin('admin');
            } else if (identifier && password) {
                // Simulation for normal user
                onLogin('user');
            } else {
                setError('يرجى إدخال البيانات بشكل صحيح');
            }
        } else {
            // Register logic simulation
            if (identifier && password) {
                onLogin('user');
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4 relative overflow-hidden">
             {/* Background Effects */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                 <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black tracking-widest uppercase mb-2 cursor-pointer" onClick={() => setView('home')}>
                        <span className="text-white">POWER</span> <span className="text-red-600">PLUS</span>
                    </h1>
                    <h2 className="text-xl text-gray-300">
                        {view === 'login' ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
                    </h2>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg flex items-center gap-2 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {error}
                        </div>
                    )}

                    {view === 'register' && (
                        <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase font-bold">الاسم الكامل</label>
                            <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="الاسم" />
                        </div>
                    )}
                    
                    <div className="space-y-2">
                        <label className="text-xs text-gray-400 uppercase font-bold">
                            {view === 'login' ? 'البريد الإلكتروني أو اسم المستخدم' : 'البريد الإلكتروني'}
                        </label>
                        <input 
                            type="text" 
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none transition-colors" 
                            placeholder={view === 'login' ? "name@example.com / abdullah" : "name@example.com"}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs text-gray-400 uppercase font-bold">كلمة المرور</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none transition-colors" 
                            placeholder="••••••••" 
                        />
                    </div>

                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5">
                        {view === 'login' ? 'دخول' : 'تسجيل'}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    {view === 'login' ? (
                        <p>
                            ليس لديك حساب؟{' '}
                            <button onClick={() => setView('register')} className="text-red-500 font-bold hover:underline">سجل الآن</button>
                        </p>
                    ) : (
                        <p>
                            لديك حساب بالفعل؟{' '}
                            <button onClick={() => setView('login')} className="text-red-500 font-bold hover:underline">تسجيل الدخول</button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
