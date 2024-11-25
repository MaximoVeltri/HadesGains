import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              PowerBar
              <span className="block text-purple-600">Energía Natural</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              La barra proteica perfecta para deportistas. 20g de proteína pura con sabor incomparable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center text-lg">
                Comprar Ahora <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <p className="text-lg font-semibold text-purple-600 flex items-center justify-center">
                $2.99 / unidad
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1622484211148-716598e14ba5?auto=format&fit=crop&q=80&w=800"
              alt="PowerBar Classic"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}