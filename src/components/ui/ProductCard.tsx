import { Star } from 'lucide-react';
import Button from './Button';
import type { Product } from '../../types';

export default function ProductCard({ name, description, price, image, rating }: Product) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600">{price}</span>
          <Button>Comprar</Button>
        </div>
      </div>
    </div>
  );
}