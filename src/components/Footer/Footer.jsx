// Importamos los íconos necesarios de react-icons/fa (Font Awesome)
import { FaHeart, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

// Definimos el componente Footer como una función
function Footer() {
  // Retornamos el JSX que representa el pie de página
  return (
    // Contenedor principal del footer con fondo oscuro y texto gris claro
    <footer className="bg-gray-900 text-gray-300 py-12">
      {/* Contenedor con ancho máximo y márgenes automáticos */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid de 3 columnas en pantallas medianas y grandes, con espaciado */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Primera columna: Información de la empresa */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">PowerBar Pro</h3>
            <p className="text-gray-400">
              Nutrición premium para deportistas y entusiastas del fitness.
            </p>
          </div>
          {/* Segunda columna: Información de contacto */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
            <p className="text-gray-400">Email: info@powerbarpro.com</p>
            <p className="text-gray-400">Tel: (555) 123-4567</p>
          </div>
          {/* Tercera columna: Enlaces a redes sociales */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Síguenos</h3>
            {/* Contenedor flex para los íconos de redes sociales */}
            <div className="flex space-x-4">
              {/* Enlace a Twitter con efecto hover */}
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaTwitter size={24} />
              </a>
              {/* Enlace a Instagram con efecto hover */}
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaInstagram size={24} />
              </a>
              {/* Enlace a Facebook con efecto hover */}
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* Sección inferior con borde superior y copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          {/* Texto de copyright con ícono de corazón centrado */}
          <p className="flex items-center justify-center text-sm">
            Hecho con <FaHeart className="text-primary mx-1" /> por PowerBar Pro 2024
          </p>
        </div>
      </div>
    </footer>
  );
}

// Exportamos el componente Footer para su uso en otras partes de la aplicación
export default Footer;