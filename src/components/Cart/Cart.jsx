import React from 'react';
// Importamos los componentes de framer-motion para las animaciones

import { motion, AnimatePresence } from 'framer-motion';
// Importamos el hook personalizado para manejar el estado del carrito
import { useCart } from '../../context/CartContext';
// Importamos el ícono de X (cerrar) de react-icons
import { FaTimes } from 'react-icons/fa';

// Definimos el componente Cart que recibe las props isOpen (estado) y onClose (función)
function Cart({ isOpen, onClose }) {
  // Extraemos las funciones y datos necesarios del contexto del carrito
  const { items, total, removeFromCart, updateQuantity } = useCart();

  // Si el carrito no está abierto, no renderizamos nada
  if (!isOpen) return null;

  return (
    // Contenedor principal con animación de fade in/out
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      {/* Panel lateral del carrito con animación de deslizamiento */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        className="absolute right-0 top-0 h-full w-96 bg-white p-6 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Encabezado del carrito con título y botón de cerrar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Carrito</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={24} />
          </button>
        </div>

        {/* Renderizado condicional: mensaje si está vacío o lista de productos */}
        {items.length === 0 ? (
          <p className="text-gray-500 text-center">El carrito está vacío</p>
        ) : (
          <>
            {/* Contenedor de items del carrito */}
            <div className="space-y-4 mb-6">
              {/* Mapeo de cada item en el carrito */}
              {items.map((item) => (
                // Contenedor individual de cada item con animación
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  {/* Información del producto */}
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  {/* Controles de cantidad y eliminación */}
                  <div className="flex items-center space-x-4">
                    {/* Selector de cantidad */}
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="border rounded p-1"
                    >
                      {/* Opciones de cantidad del 1 al 5 */}
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                    {/* Botón para eliminar item */}
                    <button
                      onClick={() => removeFromCart(item)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                      Eliminar <FaTimes />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Sección del total y botón de finalizar compra */}
            <div className="border-t pt-4">
              {/* Mostrar el total */}
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="text-xl font-bold">${total.toFixed(2)}</span>
              </div>
              {/* Botón de finalizar compra */}
              <button
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                onClick={() => {
                  // Lógica de finalización de compra (por implementar)
                  alert('¡Gracias por tu compra!');
                  onClose();
                }}
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

// Exportamos el componente Cart para su uso en otras partes de la aplicación
export default Cart;