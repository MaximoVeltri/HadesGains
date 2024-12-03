import React from 'react';
// Importamos las funciones necesarias de React Testing Library
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// Importamos el proveedor del contexto del carrito
import { CartProvider } from '../context/CartContext';
// Importamos el componente del formulario de compra
import PurchaseForm from '../components/PurchaseForm/PurchaseForm';

// Mock de IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() { return null; }
  disconnect() { return null; }
  unobserve() { return null; }
};

// Grupo de pruebas para el componente PurchaseForm
describe('PurchaseForm Component', () => {
  // Función auxiliar para renderizar el formulario dentro del contexto
  const renderForm = () => {
    render(
      <CartProvider>
        <PurchaseForm />
      </CartProvider>
    );
  };

  // Prueba: verifica que se rendericen todos los campos del formulario
  test('renders form fields', () => {
    // Renderizamos el formulario
    renderForm();
    
    // Verificamos que existan todos los campos necesarios usando sus placeholders
    expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument(); // Verifica que el campo de nombre esté presente
    expect(screen.getByPlaceholderText('Tu apellido')).toBeInTheDocument(); // Verifica que el campo de apellido esté presente
    expect(screen.getByPlaceholderText('tu@email.com')).toBeInTheDocument(); // Verifica que el campo de email esté presente
    expect(screen.getByPlaceholderText('Tu teléfono')).toBeInTheDocument(); // Verifica que el campo de teléfono esté presente
    expect(screen.getByPlaceholderText('Tu dirección completa')).toBeInTheDocument(); // Verifica que el campo de dirección esté presente
  });

  // Prueba: verifica que se muestren errores cuando los campos están vacíos
  test('shows validation errors for empty fields', async () => {
    // Renderizamos el formulario
    renderForm();
    
    // Simulamos un click en el botón de confirmar compra
    fireEvent.click(screen.getByText('Confirmar Compra')); // Simula un click en el botón de confirmar compra

    // Esperamos y verificamos que aparezcan todos los mensajes de error
    await waitFor(() => {
      expect(screen.getByText('El nombre es requerido')).toBeInTheDocument(); // Verifica que el mensaje de error de nombre esté presente
      expect(screen.getByText('El apellido es requerido')).toBeInTheDocument(); // Verifica que el mensaje de error de apellido esté presente
      expect(screen.getByText('El email es requerido')).toBeInTheDocument(); // Verifica que el mensaje de error de email esté presente
      expect(screen.getByText('El teléfono es requerido')).toBeInTheDocument(); // Verifica que el mensaje de error de teléfono esté presente
      expect(screen.getByText('La dirección es requerida')).toBeInTheDocument(); // Verifica que el mensaje de error de dirección esté presente
    });
  });

  // Prueba: verifica la validación del formato de email
  test('validates email format', async () => {
    // Renderizamos el formulario
    renderForm();
    
    // Simulamos la entrada de un email inválido
    fireEvent.input(screen.getByPlaceholderText('tu@email.com'), {
      target: { value: 'invalid-email' }, // Simula la entrada de un email inválido
    });
    
    // Intentamos enviar el formulario
    fireEvent.click(screen.getByText('Confirmar Compra')); // Simula un click en el botón de confirmar compra

    // Esperamos y verificamos que aparezca el mensaje de error de email inválido
    await waitFor(() => {
      expect(screen.getByText('Email inválido')).toBeInTheDocument(); // Verifica que el mensaje de error de email inválido esté presente
    });
  });

  // Prueba: verifica la validación del formato de número de teléfono
  test('validates phone number format', async () => {
    // Renderizamos el formulario
    renderForm();
    
    // Simulamos la entrada de un número de teléfono inválido
    fireEvent.input(screen.getByPlaceholderText('Tu teléfono'), {
      target: { value: '123' }, // Simula la entrada de un número de teléfono inválido
    });
    
    // Intentamos enviar el formulario
    fireEvent.click(screen.getByText('Confirmar Compra')); // Simula un click en el botón de confirmar compra

    // Esperamos y verificamos que aparezca el mensaje de error de teléfono inválido
    await waitFor(() => {
      expect(screen.getByText('Teléfono inválido')).toBeInTheDocument(); // Verifica que el mensaje de error de teléfono inválido esté presente
    });
  });
});