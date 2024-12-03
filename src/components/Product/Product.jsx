// Importamos los componentes necesarios para animaciones
import { motion } from 'framer-motion';
// Importamos los íconos necesarios de Font Awesome
import { FaStar, FaLeaf, FaShieldAlt, FaCheck } from 'react-icons/fa';
// Importamos el contexto del carrito
import { useCart } from '../../context/CartContext';

// Definimos el array de productos disponibles
const products = [
  {
    id: 1,
    title: "PowerBar Pro Chocolate",
    price: 2.99,
    originalPrice: 3.99,
    image: "https://images.unsplash.com/photo-1622484211817-4f764a14cd06?auto=format&fit=crop&q=80&w=500",
    description: "Descubre la perfecta combinación de nutrición y sabor con nuestra barra proteica premium."
  }
];

// Definimos los diferentes packs de productos disponibles
const packs = [
  { id: 2, title: "Básico", amount: "1 Barra", price: 2.99 },
  { id: 3, title: "Popular", amount: "Pack x6", price: 15.99, featured: true },
  { id: 4, title: "Ahorro", amount: "Pack x12", price: 29.99 }
];

// Función principal del componente Product
function Product() {
  // Obtenemos la función addToCart del contexto del carrito
  const { addToCart } = useCart();
  
  // Definimos la animación de aparición
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Función para manejar la adición de productos al carrito
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    // Contenedor principal con gradiente de fondo
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="pt-24 pb-12 px-4">
        {/* Contenedor con animaciones escalonadas */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } }
          }}
        >
          {/* Sección Hero con información principal del producto */}
          <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              {/* Etiquetas y calificación */}
              <div className="flex items-center space-x-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  Nuevo Sabor
                </span>
                {/* Sistema de calificación con estrellas */}
                <div className="flex items-center text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="ml-2 text-gray-600 text-sm">(128 reseñas)</span>
                </div>
              </div>
              
              {/* Título del producto */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                PowerBar Pro
                <span className="block text-primary">Chocolate Intenso</span>
              </h1>
              
              {/* Descripción del producto */}
              <p className="text-lg text-gray-600">
                {products[0].description}
              </p>
              
              {/* Precios y descuento */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">${products[0].price}</span>
                <span className="text-lg text-gray-500 line-through">${products[0].originalPrice}</span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">
                  25% OFF
                </span>
              </div>
              
              {/* Botón de añadir al carrito con animación */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleAddToCart(products[0])}
              >
                Añadir al Carrito
              </motion.button>
            </div>
            
            {/* Imagen del producto con animación */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={products[0].image}
                alt="PowerBar Pro Chocolate"
                className="rounded-2xl shadow-2xl"
              />
              {/* Etiqueta de producto natural */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <FaLeaf className="text-green-500 text-xl" />
                  <span className="font-medium">100% Natural</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sección de características del producto */}
          <motion.div variants={fadeIn} className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <FaShieldAlt />, title: "20g Proteína", desc: "Proteína de alta calidad" },
              { icon: <FaLeaf />, title: "Natural", desc: "Sin azúcares añadidos" },
              { icon: <FaCheck />, title: "Certificado", desc: "Calidad garantizada" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="text-primary text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Sección de precios y packs */}
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-12">Elige tu Pack</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mapeo de los diferentes packs */}
              {packs.map((pack) => (
                <motion.div
                  key={pack.id}
                  className={`p-8 rounded-xl ${
                    pack.featured 
                      ? 'bg-primary text-white scale-105' 
                      : 'bg-white'
                  } shadow-xl`}
                  whileHover={{ y: -10 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{pack.title}</h3>
                  <p className="text-3xl font-bold mb-4">${pack.price}</p>
                  <p className="mb-6">{pack.amount}</p>
                  {/* Botón de compra con animación */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-lg font-semibold ${
                      pack.featured
                        ? 'bg-white text-primary'
                        : 'bg-primary text-white'
                    }`}
                    onClick={() => handleAddToCart(pack)}
                  >
                    Comprar Ahora
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

// Exportamos el componente Product
export default Product;