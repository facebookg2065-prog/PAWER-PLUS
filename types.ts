
import React from 'react';

export interface Product {
  id: string;
  userId?: string; // Added userId to link product to user
  name: string;
  price: number;
  category: 'rifles' | 'pistols' | 'accessories' | 'armor';
  image: string;
  rating: number;
  description: string;
  stock?: number;
  discountPrice?: number;
  reviews?: Review[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface NavItem {
  label: string;
  id: string;
  icon?: React.ReactNode;
}

export interface CartItem extends Product {
  quantity: number;
}

export type ViewState = 'home' | 'store' | 'cart' | 'product' | 'dashboard' | 'checkout' | 'sell' | 'login' | 'register' | 'admin';

export type UserRole = 'guest' | 'user' | 'admin';
