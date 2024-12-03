import React from 'react';


// Importamos las funciones necesarias de React
import { createContext, useContext, useReducer } from 'react';

// Creamos un contexto para el carrito
const CartContext = createContext();

// Estado inicial del carrito: array vacío de items y total en 0
const initialState = {
  items: [], // Array que almacenará los productos agregados al carrito
  total: 0, // Total de la compra
};

// Reducer para manejar las acciones del carrito
function cartReducer(state, action) {
  // Utilizamos un switch para determinar la acción a realizar
  switch (action.type) {
    // Caso: Añadir producto al carrito
    case 'ADD_TO_CART':
      // Verificamos si el producto ya existe en el carrito
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Si existe, incrementamos su cantidad
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 } // Incrementamos la cantidad del producto
              : item
          ),
          total: state.total + action.payload.price, // Sumamos el precio del producto al total
        };
      }
      // Si no existe, lo añadimos como nuevo item
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }], // Agregamos el producto al array de items
        total: state.total + action.payload.price, // Sumamos el precio del producto al total
      };

    // Caso: Eliminar producto del carrito
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        // Filtramos el item a eliminar
        items: state.items.filter(item => item.id !== action.payload.id), // Eliminamos el producto del array de items
        // Restamos el precio total del item eliminado
        total: state.total - (action.payload.price * action.payload.quantity), // Restamos el precio del producto multiplicado por su cantidad del total
      };

    // Caso: Actualizar cantidad de un producto
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        // Actualizamos la cantidad del item específico
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity } // Actualizamos la cantidad del producto
            : item
        ),
        // Recalculamos el total basado en las nuevas cantidades
        total: state.items.reduce((acc, item) => {
          if (item.id === action.payload.id) {
            return acc + (item.price * action.payload.quantity); // Sumamos el precio del producto multiplicado por su nueva cantidad al total
          }
          return acc + (item.price * item.quantity); // Sumamos el precio del producto multiplicado por su cantidad actual al total
        }, 0),
      };

    // Caso por defecto: retornar estado sin cambios
    default:
      return state; // Retornamos el estado sin realizar cambios
  }
}

// Componente proveedor del contexto del carrito
export function CartProvider({ children }) {
  // Inicializamos el reducer con el estado inicial
  const [state, dispatch] = useReducer(cartReducer, initialState); // Inicializamos el reducer con el estado inicial

  // Función para añadir productos al carrito
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product }); // Lanzamos la acción para agregar el producto al carrito
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product }); // Lanzamos la acción para eliminar el producto del carrito
  };

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }); // Lanzamos la acción para actualizar la cantidad del producto
  };

  // Proveemos el estado y las funciones a los componentes hijos
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart, updateQuantity }}>
      {children} // Renderizamos los componentes hijos
    </CartContext.Provider>
  );
}

// Hook personalizado para usar el contexto del carrito
export function useCart() {
  // Obtenemos el contexto
  const context = useContext(CartContext); // Obtenemos el contexto del carrito
  // Si no existe el contexto, lanzamos un error
  if (!context) {
    throw new Error('useCart must be used within a CartProvider'); // Lanzamos un error si no se utiliza dentro de un CartProvider
  }
  // Retornamos el contexto
  return context; // Retornamos el contexto del carrito
}