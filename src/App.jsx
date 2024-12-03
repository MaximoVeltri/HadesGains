import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import PurchaseForm from './components/PurchaseForm/PurchaseForm';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <motion.div 
        className="min-h-screen flex flex-col bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main>
          <section id="producto">
            <Product />
          </section>
          <PurchaseForm />
        </main>
        <Footer />
      </motion.div>
    </CartProvider>
  );
}

export default App;