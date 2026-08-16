import { useState } from 'react';
import { Preloader } from './components/Preloader';
import { ParchmentHero, CartItem } from './components/ParchmentHero';
import { EssenceOfLuxury } from './components/EssenceOfLuxury';
import { FragranceCollection, ProductItem } from './components/FragranceCollection';
import { ScentOfElegance } from './components/ScentOfElegance';
import { RefinedMoments } from './components/RefinedMoments';
import { FragranceFaq } from './components/FragranceFaq';
import { CtaBanner } from './components/CtaBanner';
import { AtelierLocation } from './components/AtelierLocation';
import { Footer } from './components/Footer';
import { CartToastNotification, ToastProduct } from './components/CartToastNotification';
import { ProductViewModal } from './components/ProductViewModal';
import './App.css';

export function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Product View Quick Modal State
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Toast Notification State (Bottom-Right)
  const [toastProduct, setToastProduct] = useState<ToastProduct | null>(null);
  const [isToastVisible, setIsToastVisible] = useState<boolean>(false);

  // Global Luxury Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'khwaab',
      name: 'KHWAAB',
      subtitle: 'EXTRAIT DE PARFUM',
      price: 850,
      volume: '60ML',
      image: '/p1.png',
      quantity: 1,
    },
  ]);

  // Handler to show toast when adding to cart
  const triggerToast = (product: ToastProduct) => {
    setToastProduct(product);
    setIsToastVisible(true);
  };

  // Handler to add items from the Curated Recommendations section
  const handleAddCollectionItem = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name.toUpperCase(),
          subtitle: product.subtitle,
          price: product.priceNum,
          volume: product.volume.split(' ')[0],
          image: product.image,
          quantity: 1,
        },
      ];
    });

    // Show Bottom-Right Notification Toast (Do NOT auto-open panel)
    triggerToast({
      name: product.name.toUpperCase(),
      price: product.price,
      image: product.image,
    });
  };

  // Handler to add items from the Product Quick View Modal with custom quantity
  const handleModalAddToCart = (product: ProductItem, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name.toUpperCase(),
          subtitle: product.subtitle,
          price: product.priceNum,
          volume: product.volume.split(' ')[0],
          image: product.image,
          quantity: quantity,
        },
      ];
    });

    // Show toast notification with quantity count
    triggerToast({
      name: `${product.name.toUpperCase()}${quantity > 1 ? ` (x${quantity})` : ''}`,
      price: product.price,
      image: product.image,
    });
  };

  const handleOpenProductModal = (product: ProductItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleScrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-canvas">
      {/* Luxury Preloader */}
      {loading && (
        <Preloader 
          minDuration={2800}
          onComplete={() => setLoading(false)} 
        />
      )}

      {/* Main Luxury Experience */}
      <div className={`site-frame ${!loading ? 'site-frame-visible' : ''}`}>
        {/* 1. Hero & Header Section */}
        <ParchmentHero 
          cartItems={cartItems}
          setCartItems={setCartItems}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          onAddToCartToast={triggerToast}
        />

        {/* 2. Essence of Luxury (About Us) Editorial Story Section */}
        <EssenceOfLuxury />

        {/* 3. Fragrance Collection Section */}
        <FragranceCollection 
          onAddToCart={handleAddCollectionItem} 
          onProductSelect={handleOpenProductModal}
        />

        {/* 4. Scent of Elegance (Product Anatomy & Pillars Showcase) */}
        <ScentOfElegance />

        {/* 5. Refined Moments (Favorite Fragrances Showcase) */}
        <RefinedMoments onExploreCollection={handleScrollToCollection} />

        {/* 6. Client Care & Frequently Asked Questions (FAQs) */}
        <FragranceFaq />

        {/* 7. Haute Parfumerie CTA Banner with Brand Logo */}
        <CtaBanner onExplore={handleScrollToCollection} />

        {/* 8. Visit Our Kuwait Atelier & Interactive Minimalist Map */}
        <AtelierLocation />

        {/* 9. Luxury Brand Footer */}
        <Footer />
      </div>

      {/* 10. Product Quick View Modal */}
      <ProductViewModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleModalAddToCart}
      />

      {/* 11. Bottom-Right Add to Cart Toast Notification */}
      <CartToastNotification
        product={toastProduct}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
}

export default App;
