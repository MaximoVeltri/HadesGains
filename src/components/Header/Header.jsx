// Importamos los hooks y componentes necesarios de React
import { useState } from 'react';
// Importamos motion para animaciones
import { motion } from 'framer-motion';
// Importamos íconos de Font Awesome
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
// Importamos Link para navegación suave
import { Link } from 'react-scroll';
// Importamos el contexto del carrito
import { useCart } from '../../context/CartContext';
// Importamos el componente Cart
import Cart from '../Cart/Cart';

// Función principal del componente Header
function Header() {
  // Estado para controlar la apertura/cierre del carrito
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Estado para controlar el menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Obtenemos los items del carrito del contexto
  const { items } = useCart();

  // Calculamos el número total de items en el carrito
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Definimos los items de navegación
  const navItems = [
    { to: "producto", label: "Productos" },
    { to: "beneficios", label: "Beneficios" },
    { to: "comprar", label: "Comprar" }
  ];

  return (
    <>
      {/* Header con animación de entrada desde arriba */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white shadow-md z-40"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo con animación al hover */}
            <motion.h1 
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
            >
              PowerBar Pro
            </motion.h1>
            
            {/* Botón del menú móvil - solo visible en pantallas pequeñas */}
            <button
              className="md:hidden text-gray-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Navegación para escritorio - oculta en móvil */}
            <nav className="hidden md:flex space-x-8">
              {/* Mapeo de los items de navegación */}
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Botón del carrito con animación y contador */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2"
              onClick={() => setIsCartOpen(true)}
            >
              <FaShoppingCart className="text-2xl text-primary" />
              {/* Mostrar contador solo si hay items */}
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </motion.button>
          </div>

          {/* Navegación móvil - visible solo cuando está abierta */}
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 space-y-4"
            >
              {/* Mapeo de items para menú móvil */}
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block text-gray-600 hover:text-primary transition-colors cursor-pointer py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </div>
      </motion.header>
      {/* Componente Cart que se muestra/oculta según el estado */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

// Exportamos el componente Header
export default Header;