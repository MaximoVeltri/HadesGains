import { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { NAV_LINKS } from '../../constants';
import Button from '../ui/Button';

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
              {NAV_LINKS.map(({ href, label }) => (
                <a 
                  key={href}
                  href={href}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {label}
                </a>
              ))}
              <Button className="px-4 py-2">Comprar Ahora</Button>
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
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600"
                >
                  {label}
                </a>
              ))}
              <Button className="w-full text-left px-3 py-2">
                Comprar Ahora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}