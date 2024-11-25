export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-600">
          <p>© {currentYear} PowerBar. Todos los derechos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Contacto</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Términos</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}