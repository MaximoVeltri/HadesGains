fireEvent.click(screen.getByRole('button', { name: /eliminar/i }));
// Importamos las funciones de testing de React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
// Importamos el contexto del carrito y sus componentes
import { CartProvider, useCart } from '../context/CartContext';
// Importamos el componente Cart que vamos a testear
import Cart from '../components/Cart/Cart';

// Componente de prueba que simula la adición de productos al carrito
const TestComponent = () => {
  // Obtenemos la función addToCart del contexto
  const { addToCart } = useCart();
  return (
    // Botón que añade un producto de prueba al carrito
    <button onClick={() => addToCart({ id: 1, title: 'Test Product', price: 10 })}>
      Add to Cart
    </button>
  );
};

// Grupo de pruebas para el componente Cart
describe('Cart Component', () => {
  // Prueba: verifica que se muestre el mensaje de carrito vacío
  test('renders empty cart message when cart is empty', () => {
    // Renderizamos el componente Cart dentro del Provider
    render(
      <CartProvider>
        <Cart isOpen={true} onClose={() => {}} />
      </CartProvider>
    );
    
    // Verificamos que el mensaje de carrito vacío esté presente
    expect(screen.getByText('El carrito está vacío')).toBeInTheDocument();
  });

  // Prueba: verifica que se añadan items al carrito y se actualice el total
  test('adds item to cart and updates total', () => {
    // Renderizamos los componentes necesarios
    render(
      <CartProvider>
        <TestComponent />
        <Cart isOpen={true} onClose={() => {}} />
      </CartProvider>
    );

    // Simulamos el click en el botón de añadir al carrito
    fireEvent.click(screen.getByText('Add to Cart'));
    
    // Verificamos que el producto y su precio aparezcan en el carrito
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
  });

  // Prueba: verifica que se eliminen items del carrito
  test('removes item from cart', () => {
    // Renderizamos los componentes necesarios
    render(
      <CartProvider>
        <TestComponent />
        <Cart isOpen={true} onClose={() => {}} />
      </CartProvider>
    );

    // Añadimos un producto y luego lo eliminamos
    fireEvent.click(screen.getByText('Add to Cart'));
    fireEvent.click(screen.getByRole('button', { name: /eliminar/i }));
    
    // Verificamos que aparezca el mensaje de carrito vacío
    expect(screen.getByText('El carrito está vacío')).toBeInTheDocument();
  });

  // Prueba: verifica que la actualización de cantidad funcione correctamente
  test('updates quantity correctly', () => {
    // Renderizamos los componentes necesarios
    render(
      <CartProvider>
        <TestComponent />
        <Cart isOpen={true} onClose={() => {}} />
      </CartProvider>
    );

    // Añadimos un producto al carrito
    fireEvent.click(screen.getByText('Add to Cart'));
    
    // Obtenemos el selector de cantidad y cambiamos su valor a 3
    const quantitySelect = screen.getByRole('combobox');
    fireEvent.change(quantitySelect, { target: { value: '3' } });
    
    // Verificamos que el total se actualice correctamente ($10 * 3 = $30.00)
    expect(screen.getByText('$30.00')).toBeInTheDocument();
  });
});