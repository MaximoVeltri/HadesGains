import React from 'react';
import { Leaf, Shield, Battery } from 'lucide-react';
import { Feature, NavLink, Product } from '../types';

export const FEATURES: Feature[] = [
  {
    icon: React.createElement(Leaf, { className: 'h-6 w-6 text-green-600' }),
    title: '100% Natural',
    description: 'Ingredientes naturales seleccionados de la más alta calidad.',
  },
  {
    icon: React.createElement(Shield, { className: 'h-6 w-6 text-purple-600' }),
    title: '20g Proteína',
    description: 'La dosis perfecta para tu recuperación muscular.',
  },
  {
    icon: React.createElement(Battery, { className: 'h-6 w-6 text-purple-600' }),
    title: 'Energía Real',
    description: 'Energía sostenida sin picos de azúcar.',
  },
];

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Inicio' },
  { href: '#products', label: 'Productos' },
  { href: '#benefits', label: 'Beneficios' },
  { href: '#contact', label: 'Contacto' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'classic',
    name: 'PowerBar Classic',
    description: 'La barra proteica original con sabor a chocolate.',
    price: '$2.99',
    image: 'https://images.unsplash.com/photo-1622484211148-716598e14ba5?auto=format&fit=crop&q=80&w=800',
    rating: 5,
  },
];

