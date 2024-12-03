import React from 'react';
// Importamos el componente de animación de framer-motion
import { motion } from 'framer-motion';
// Importamos el hook useForm para manejar formularios
import { useForm } from 'react-hook-form';
// Importamos el contexto del carrito
import { useCart } from '../../context/CartContext';

// Función que representa el formulario de compra
function PurchaseForm() {
  // Extraemos las funciones y estado del formulario de react-hook-form
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  // Obtenemos el total y los items del carrito
  const { total, items } = useCart();

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data) => {
    // Imprimimos en consola los datos del formulario y los items del carrito
    console.log('Form submitted:', { ...data, items, total });
    // Mostramos un mensaje de agradecimiento al usuario
    alert('¡Gracias por tu compra! Te contactaremos pronto.');
    // Reseteamos el formulario
    reset();
  };

  // Retornamos el JSX del formulario
  return (
    // Sección de compra con fondo gris claro
    <section id="comprar" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Contenedor del formulario con animación de entrada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Finalizar Compra</h2>
          
          {/* Formulario de compra */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Grid de 2 columnas para nombre y apellido */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Campo de nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  {...register("nombre", { 
                    required: "El nombre es requerido",
                    minLength: { value: 2, message: "El nombre debe tener al menos 2 caracteres" }
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tu nombre"
                />
                {/* Mensaje de error para el nombre */}
                {errors.nombre && (
                  <p className="mt-1 text-red-500 text-sm">{errors.nombre.message}</p>
                )}
              </div>

              {/* Campo de apellido */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Apellido
                </label>
                <input
                  {...register("apellido", { 
                    required: "El apellido es requerido",
                    minLength: { value: 2, message: "El apellido debe tener al menos 2 caracteres" }
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tu apellido"
                />
                {/* Mensaje de error para el apellido */}
                {errors.apellido && (
                  <p className="mt-1 text-red-500 text-sm">{errors.apellido.message}</p>
                )}
              </div>
            </div>

            {/* Campo de email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                {...register("email", { 
                  required: "El email es requerido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido"
                  }
                })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="tu@email.com"
              />
              {/* Mensaje de error para el email */}
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Campo de teléfono */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                {...register("telefono", { 
                  required: "El teléfono es requerido",
                  pattern: {
                    value: /^[0-9]{9,}$/,
                    message: "Teléfono inválido"
                  }
                })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tu teléfono"
              />
              {/* Mensaje de error para el teléfono */}
              {errors.telefono && (
                <p className="mt-1 text-red-500 text-sm">{errors.telefono.message}</p>
              )}
            </div>

            {/* Campo de dirección */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dirección de envío
              </label>
              <textarea
                {...register("direccion", { 
                  required: "La dirección es requerida",
                  minLength: { value: 10, message: "Por favor, proporciona una dirección más detallada" }
                })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                rows="3"
                placeholder="Tu dirección completa"
              />
              {/* Mensaje de error para la dirección */}
              {errors.direccion && (
                <p className="mt-1 text-red-500 text-sm">{errors.direccion.message}</p>
              )}
            </div>

            {/* Resumen del pedido - solo se muestra si hay items en el carrito */}
            {items.length > 0 && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Resumen del pedido</h3>
                <div className="space-y-2">
                  {/* Lista de items en el carrito */}
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.title} x {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  {/* Total del pedido */}
                  <div className="border-t pt-2 mt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Botón de confirmar compra con animación */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Confirmar Compra
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

// Exportamos el componente PurchaseForm
  export default PurchaseForm;