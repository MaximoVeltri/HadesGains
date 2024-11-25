import React from 'react';
import { Leaf, Shield, Battery } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-6 w-6 text-purple-600" />,
    title: '100% Natural',
    description: 'Ingredientes naturales seleccionados de la más alta calidad.'
  },
  {
    icon: <Shield className="h-6 w-6 text-purple-600" />,
    title: '20g Proteína',
    description: 'La dosis perfecta para tu recuperación muscular.'
  },
  {
    icon: <Battery className="h-6 w-6 text-purple-600" />,
    title: 'Energía Real',
    description: 'Energía sostenida sin picos de azúcar.'
  }
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}