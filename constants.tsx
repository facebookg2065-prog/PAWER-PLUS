
import { Product } from './types';
import { Crosshair, Shield, Zap, ShoppingBag } from 'lucide-react';
import React from 'react';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    userId: 'admin',
    name: 'M4A1 Tactical Custom',
    price: 1200,
    category: 'rifles',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&q=80&w=800',
    rating: 5,
    description: 'بندقية هجومية معدلة بالكامل مع منظار بصري ومقبض تكتيكي.'
  },
  {
    id: '2',
    userId: 'admin',
    name: 'Glock 19 Gen 5',
    price: 550,
    category: 'pistols',
    image: 'https://images.unsplash.com/photo-1585589266882-28d73a46f8de?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    description: 'مسدس عيار 9 ملم، دقة عالية واعتمادية لا مثيل لها.'
  },
  {
    id: '3',
    userId: 'admin',
    name: 'AWM Sniper Rifle',
    price: 4500,
    category: 'rifles',
    image: 'https://images.unsplash.com/photo-1591439633072-79f8e216a1e3?auto=format&fit=crop&q=80&w=800',
    rating: 5,
    description: 'بندقية قنص بعيدة المدى بدقة استثنائية وقوة نارية هائلة.'
  },
  {
    id: '4',
    userId: 'admin',
    name: 'Tactical Vest Level 4',
    price: 300,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1595969905758-4123138f2379?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    description: 'سترة واقية من الرصاص خفيفة الوزن توفر أقصى درجات الحماية.'
  },
  {
    id: '5',
    userId: 'admin',
    name: 'Thermal Scope X200',
    price: 899,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    description: 'منظار حراري متطور للرؤية الليلية وتحديد الأهداف.'
  }
];

export const CATEGORIES = [
  { id: 'rifles', name: 'بنادق', icon: <Crosshair className="w-5 h-5" /> },
  { id: 'pistols', name: 'مسدسات', icon: <Zap className="w-5 h-5" /> },
  { id: 'accessories', name: 'إضافات', icon: <Shield className="w-5 h-5" /> },
];
