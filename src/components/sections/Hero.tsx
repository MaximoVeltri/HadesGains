import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { PRODUCTS } from '../../constants';

export default function Hero() {
  const mainProduct = PRODUCTS[0];

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
              <Button className="px-8 py-4 text-lg inline-flex items-center">
                Comprar Ahora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-lg font-semibold text-purple-600 flex items-center justify-center">
                {mainProduct.price} / unidad
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={mainProduct.image}
              alt={mainProduct.name}
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}