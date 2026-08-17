import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import './ParchmentHero.css';

export interface PerfumeVariant {
  id: string;
  watermark: string;
  watermarkScale: string;
  name: string;
  subtitle: string;
  price: string;
  priceNum: number;
  volume: string;
  description: string;
  image: string;
  frontTilt: number;
  backTilt: number;
  glowColor: string;
}

export interface CartItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  volume: string;
  image: string;
  quantity: number;
}

export const heroVariants: PerfumeVariant[] = [
  {
    id: 'khwaab',
    watermark: 'KHWAAB',
    watermarkScale: 'clamp(4.6rem, 10vw, 8.8rem)',
    name: 'KHWAAB',
    subtitle: 'EXTRAIT DE PARFUM',
    price: 'AED 850',
    priceNum: 850,
    volume: '60ML e 2.0 fl.oz.',
    description:
      'An opulent signature fragrance capturing the essence of warm burning amber, precious agarwood, and honeyed saffron. Handcrafted for a magnetic, unforgettable presence.',
    image: '/p1.png',
    frontTilt: -10,
    backTilt: 16,
    glowColor: 'rgba(235, 175, 45, 0.28)',
  },
  {
    id: 'zareen',
    watermark: 'ZAREEN',
    watermarkScale: 'clamp(4.8rem, 10.5vw, 9.2rem)',
    name: 'ZAREEN',
    subtitle: 'EXTRAIT DE PARFUM',
    price: 'AED 1,150',
    priceNum: 1150,
    volume: '60ML e 2.0 fl.oz.',
    description:
      'An alluring velvety blend of midnight plum, golden suede, and sweet warm tonka, created for those who command admiration with effortless royal charm.',
    image: '/p5.png',
    frontTilt: -12,
    backTilt: 14,
    glowColor: 'rgba(180, 80, 140, 0.25)',
  },
  {
    id: 'sukoon',
    watermark: 'SUKOON',
    watermarkScale: 'clamp(5.2rem, 11vw, 9.6rem)',
    name: 'SUKOON',
    subtitle: 'EXTRAIT DE PARFUM',
    price: 'AED 1,200',
    priceNum: 1200,
    volume: '60ML e 2.0 fl.oz.',
    description:
      'Pure serenity captured in golden solar medallion notes of creamy white sandalwood, comforting sunlit amber, and royal Madagascar vanilla.',
    image: '/p7.png',
    frontTilt: -8,
    backTilt: 18,
    glowColor: 'rgba(220, 180, 90, 0.25)',
  },
  {
    id: 'mehfil',
    watermark: 'MEHFIL',
    watermarkScale: 'clamp(4.6rem, 10vw, 8.8rem)',
    name: 'MEHFIL',
    subtitle: 'EXTRAIT DE PARFUM',
    price: 'AED 1,100',
    priceNum: 1100,
    volume: '60ML e 2.0 fl.oz.',
    description:
      'Velvety Damascus rose intertwined with blushing wild peonies, sweet lychee, and glowing Madagascar vanilla, radiating pure celebration and irresistible glamour.',
    image: '/p4.png',
    frontTilt: -11,
    backTilt: 15,
    glowColor: 'rgba(220, 50, 95, 0.25)',
  },
];

interface ParchmentHeroProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  onAddToCartToast?: (product: { name: string; price: number; image: string }) => void;
}

export const ParchmentHero: React.FC<ParchmentHeroProps> = ({
  cartItems,
  setCartItems,
  isCartOpen,
  setIsCartOpen,
  onAddToCartToast: _onAddToCartToast,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Sticky Navbar Detection on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || window.pageYOffset || 0;
      setIsScrolled(scrollPos > 30);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatic Carousel Flowing Transitions (Auto-Moves Every 4.5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % heroVariants.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const current = heroVariants[activeIdx];

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="parchment-hero-section" id="hero">
      {/* Background Decorative Botanical Engravings */}
      <div className="botanical-bg-left">
        <svg viewBox="0 0 240 240" width="400" height="400" fill="none" stroke="#9e8b6b" strokeWidth="0.75" opacity="0.3">
          <path d="M120 220 C90 150 40 110 15 95 C65 95 90 150 120 220 Z" />
          <path d="M120 220 C150 150 200 110 225 95 C175 95 150 150 120 220 Z" />
          <path d="M120 220 C105 120 80 60 120 20 C160 60 135 120 120 220 Z" />
          <circle cx="120" cy="170" r="18" />
          <path d="M85 145 C60 95 35 45 10 20 C60 45 85 95 85 145 Z" />
        </svg>
      </div>

      <div className="botanical-bg-right">
        <svg viewBox="0 0 240 240" width="400" height="400" fill="none" stroke="#9e8b6b" strokeWidth="0.75" opacity="0.3">
          <path d="M120 220 C90 150 40 110 15 95 C65 95 90 150 120 220 Z" />
          <path d="M120 220 C150 150 200 110 225 95 C175 95 150 150 120 220 Z" />
          <path d="M120 220 C105 120 80 60 120 20 C160 60 135 120 120 220 Z" />
        </svg>
      </div>

      {/* Dynamic Ambient Glow */}
      <div className="hero-warm-ambience">
        <div 
          className="ambience-core-glow"
          style={{ background: `radial-gradient(circle, ${current.glowColor} 0%, transparent 70%)` }}
        ></div>
      </div>

      {/* =========================================
         1. Header Navbar (Centered Menu, Enlarged Logo & Clean Icons)
         ========================================= */}
      <header className={`parchment-top-navbar ${isScrolled ? 'is-sticky-scrolled' : ''}`}>
        {/* Left: Enlarged Solo Logo */}
        <div className="navbar-logo-solo">
          <a href="#" title="FYN PERFUME">
            <img src="/logo.png" alt="FYN Logo" className="solo-logo-img" />
          </a>
        </div>

        {/* Center: EXACTLY Centered Navigation Menu Links */}
        <nav className="navbar-center-menu">
          <a href="#home" className="nav-menu-link active">Home</a>
          <a href="#collection" className="nav-menu-link">Collection</a>
          <a href="#about" className="nav-menu-link">About</a>
          <a href="#contact" className="nav-menu-link">Contact</a>
        </nav>

        {/* Right: Transparent Icon-Only Buttons (Cart & Menu) */}
        <div className="navbar-right-utils">
          <button 
            className="nav-cart-btn-icon" 
            onClick={() => {
              setIsMenuOpen(false);
              setIsCartOpen(true);
            }}
            title="Shopping Bag"
            aria-label="Shopping Bag"
          >
            <ShoppingBag size={24} strokeWidth={1.7} />
            {totalCartCount > 0 && (
              <span className="cart-mini-count">{totalCartCount}</span>
            )}
          </button>

          <button 
            className="nav-menu-btn-icon" 
            onClick={() => {
              setIsCartOpen(false);
              setIsMenuOpen(true);
            }}
            aria-label="Open Concierge & Contact Panel"
            title="Menu & Concierge"
          >
            <Menu size={26} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {/* =========================================
         2. Hero Center Stage (Watermark + 2 Flowing Bottles, Auto-Play)
         ========================================= */}
      <div className="hero-center-stage">
        {/* Animated Watermark Typography */}
        <div className="large-watermark-wrapper">
          <div className="watermark-top-emblem">
            <svg viewBox="0 0 32 32" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M16 3C12 9 6 13 6 20a10 10 0 0 0 20 0c0-7-6-11-10-17z" />
              <path d="M16 10c-2.5 4-5 6.5-5 10a5 5 0 0 0 10 0c0-3.5-2.5-6-5-10z" />
            </svg>
          </div>
          <span 
            key={current.id}
            className="large-watermark-text watermark-animated"
            style={{ fontSize: current.watermarkScale }}
          >
            {current.watermark}
          </span>
        </div>

        {/* Centerpiece: Duo Flowing Perfume Bottles with 3D Wave Physics */}
        <div className="bottle-hero-showcase">
          <div className="duo-bottles-stage">
            {/* Back Perspective Bottle */}
            <div 
              className="bottle-floating-anchor back-bottle-flow"
              style={{ '--target-tilt': `${current.backTilt}deg` } as React.CSSProperties}
            >
              <img 
                key={`back-${current.id}`}
                src={current.image} 
                alt={`${current.name} Perspective`} 
                className="khwaab-transparent-bottle-img back-bottle-img" 
              />
              <div className="bottle-floor-shadow back-shadow"></div>
            </div>

            {/* Front Main Bottle */}
            <div 
              className="bottle-floating-anchor front-bottle-flow"
              style={{ '--target-tilt': `${current.frontTilt}deg` } as React.CSSProperties}
            >
              <img 
                key={`front-${current.id}`}
                src={current.image} 
                alt={current.name} 
                className="khwaab-transparent-bottle-img front-bottle-img" 
              />
              <div className="bottle-floor-shadow front-shadow"></div>
            </div>
          </div>

          {/* Price & Volume Badge Below Bottle */}
          <div className="bottle-info-pill">
            <span className="price-tag">{current.price}</span>
            <span className="divider-dot">•</span>
            <span className="volume-tag">{current.volume}</span>
          </div>
        </div>
      </div>

      {/* =========================================
         3. Hero Bottom Bar (Enlarged Story Text, CTA Button, Progress Indicator)
         ========================================= */}
      <footer className="hero-bottom-bar">
        {/* Bottom Left: Enlarged Editorial Story */}
        <div className="bar-left-story">
          <p className="story-editorial-copy">
            {current.description}
          </p>
        </div>

        {/* Bottom Center: Sharp Rectangular CTA Button linked to Collection */}
        <div className="bar-center-cta">
          <button className="get-now-luxury-btn" onClick={scrollToCollection}>
            Buy Now
          </button>
        </div>

        {/* Bottom Right: Progress Indicator Bars (Auto-Synced) */}
        <div className="bar-right-progress">
          <div className="progress-bars-row">
            {heroVariants.map((v, i) => (
              <span 
                key={v.id} 
                className={`prog-bar-segment ${i === activeIdx ? 'segment-active' : ''}`}
                onClick={() => setActiveIdx(i)}
                title={v.name}
              />
            ))}
            <span className="prog-bullet-dot active-bullet"></span>
            <span className="prog-bullet-dot"></span>
          </div>
        </div>
      </footer>

      {/* =========================================
         4. Slide-Out Luxury Contact & Concierge Panel (RIGHT-SIDE, LIGHT THEME)
         ========================================= */}
      <div className={`luxury-drawer-backdrop ${isMenuOpen ? 'drawer-open' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <aside 
          className={`luxury-drawer-panel light-theme menu-drawer ${isMenuOpen ? 'panel-visible' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Top Header */}
          <div className="drawer-header-row">
            <div className="drawer-brand-wrap">
              <img src="/logo.png" alt="FYN Logo" className="drawer-logo-img" />
              <div className="drawer-header-text">
                <span className="drawer-brand-title">FYN PERFUME</span>
                <span className="drawer-brand-subtitle">CONCIERGE & BOUTIQUE</span>
              </div>
            </div>
            <button className="drawer-close-btn" onClick={() => setIsMenuOpen(false)} aria-label="Close Contact Panel">
              <X size={20} />
            </button>
          </div>

          {/* Contact Details & Concierge Content */}
          <div className="concierge-content-container">
            {/* VIP Direct Assistance */}
            <div className="concierge-card-block">
              <span className="concierge-block-heading">DIRECT CONCIERGE</span>
              
              <div className="contact-detail-row">
                <div className="detail-icon-box">
                  <Phone size={17} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">VIP Helpline & Orders</span>
                  <a href="tel:+96550084784" className="detail-val-link">+965 50084784</a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon-box">
                  <MessageCircle size={17} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">WhatsApp Concierge</span>
                  <a href="https://wa.me/96550084784" target="_blank" rel="noopener noreferrer" className="detail-val-link">
                    +965 50084784
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon-box">
                  <Mail size={17} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">Private Enquiries</span>
                  <a href="mailto:concierge@fynperfume.com" className="detail-val-link">concierge@fynperfume.com</a>
                </div>
              </div>
            </div>

            {/* Flagship Boutiques */}
            <div className="concierge-card-block">
              <span className="concierge-block-heading">FLAGSHIP ATELIER</span>

              <div className="contact-detail-row">
                <div className="detail-icon-box">
                  <MapPin size={17} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">Kuwait City Atelier</span>
                  <p className="detail-text">Al Hamra Luxury Center, Al Shuhada St, Kuwait City, Kuwait</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon-box">
                  <Clock size={17} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">Atelier Timings</span>
                  <p className="detail-text">Saturday – Thursday: 10:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Connection */}
            <div className="concierge-card-block">
              <span className="concierge-block-heading">SOCIAL PRESENCE</span>
              <div className="contact-detail-row">
                <div className="detail-icon-box">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className="detail-info">
                  <span className="detail-label">Instagram Official</span>
                  <a href="https://www.instagram.com/fyn_perfume/" target="_blank" rel="noopener noreferrer" className="detail-val-link">
                    @fyn_perfume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="drawer-footer-block">
            <span className="drawer-tagline">“Find Your Note — An Eternal Scent Experience”</span>
            <span className="drawer-copyright">© 2026 FYN PERFUME. All Rights Reserved.</span>
          </div>
        </aside>
      </div>

      {/* =========================================
         5. Slide-Out Luxury Shopping Cart Drawer Panel (RIGHT-SIDE, LIGHT THEME)
         ========================================= */}
      <div className={`luxury-drawer-backdrop ${isCartOpen ? 'drawer-open' : ''}`} onClick={() => setIsCartOpen(false)}>
        <aside 
          className={`luxury-drawer-panel light-theme cart-drawer ${isCartOpen ? 'panel-visible' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="drawer-header-row">
            <div className="drawer-brand-wrap">
              <div className="detail-icon-box gold-tint">
                <ShoppingBag size={18} />
              </div>
              <div className="drawer-header-text">
                <span className="drawer-brand-title">YOUR SHOPPING BAG</span>
                <span className="drawer-brand-subtitle">{totalCartCount} {totalCartCount === 1 ? 'ITEM' : 'ITEMS'} SELECTED</span>
              </div>
            </div>
            <button className="drawer-close-btn" onClick={() => setIsCartOpen(false)} aria-label="Close Cart">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="cart-items-container">
            {cartItems.length === 0 ? (
              <div className="cart-empty-state">
                <ShoppingBag size={44} className="empty-cart-icon" />
                <p className="empty-text">Your luxury shopping bag is currently empty.</p>
                <button className="empty-browse-btn" onClick={() => setIsCartOpen(false)}>
                  Explore Fragrances
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="cart-item-img-frame">
                    <img src={item.image} alt={item.name} className="cart-item-thumb" />
                  </div>

                  <div className="cart-item-info">
                    <div className="cart-item-headline">
                      <h4 className="cart-item-title">{item.name}</h4>
                      <button 
                        className="cart-remove-btn" 
                        onClick={() => removeItem(item.id)}
                        title="Remove Item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <span className="cart-item-sub">{item.subtitle} • {item.volume}</span>
                    <span className="cart-item-price">AED {item.price}</span>

                    {/* Quantity Stepper */}
                    <div className="cart-qty-stepper">
                      <button 
                        className="qty-btn" 
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="qty-count">{item.quantity}</span>
                      <button 
                        className="qty-btn" 
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Summary & Checkout Footer */}
          {cartItems.length > 0 && (
            <div className="cart-footer-checkout-block">
              <div className="cart-subtotal-row">
                <span className="subtotal-label">Subtotal</span>
                <span className="subtotal-amount">AED {cartTotal}</span>
              </div>
              <div className="cart-shipping-notice">
                <ShieldCheck size={14} />
                <span>Complimentary Insured Express Delivery</span>
              </div>

              <button className="proceed-checkout-btn">
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight size={16} />
              </button>

              <button className="continue-shopping-link" onClick={() => setIsCartOpen(false)}>
                Continue Exploring Fragrances
              </button>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
};
