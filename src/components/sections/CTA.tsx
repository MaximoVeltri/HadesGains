import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="bg-purple-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          ¿Listo para mejorar tu rendimiento?
        </h2>
        <Button variant="secondary" className="px-8 py-4 text-lg">
          Comprar Ahora
        </Button>
      </div>
    </section>
  );
}