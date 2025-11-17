
import React from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'rifles' | 'pistols' | 'accessories';
  image: string;
  rating: number;
  description: string;
}

export interface NavItem {
  label: string;
  id: string;
  icon?: React.ReactNode;
}

export type ViewState = 'home' | 'store' | 'cart' | 'product' | 'dashboard';
