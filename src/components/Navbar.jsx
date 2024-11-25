import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">PowerBars</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Inicio</a>
              <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors">Productos</a>
              <a href="#benefits" className="text-gray-700 hover:text-purple-600 transition-colors">Beneficios</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contacto</a>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Comprar Ahora
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Inicio</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Productos</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Beneficios</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Contacto</a>
              <button className="w-full text-left px-3 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700">
                Comprar Ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}