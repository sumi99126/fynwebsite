import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import './FragranceCollection.css';

export interface ProductItem {
  id: string;
  name: string;
  urduName: string;
  subtitle: string;
  category: 'oriental' | 'floral' | 'fresh' | 'woody';
  price: string;
  priceNum: number;
  volume: string;
  notes: string;
  description: string;
  tag?: string;
  image: string;
  pedestalTone: string;
}

export const collectionProducts: ProductItem[] = [
  {
    id: 'khwaab',
    name: 'Khwaab',
    urduName: 'خواب',
    subtitle: 'EXTRAIT DE PARFUM',
    category: 'oriental',
    price: 'AED 850',
    priceNum: 850,
    volume: '60ML',
    notes: 'Warm Amber · Rare Oud · Honeyed Saffron',
    description: 'An opulent golden revelation of burning amber, rare oud, and sweet honeyed saffron.',
    tag: 'BESTSELLER',
    image: '/p1.png',
    pedestalTone: '#e6d8c3',
  },
  {
    id: 'noir',
    name: 'Noir',
    urduName: 'نویر',
    subtitle: 'EXTRAIT DE PARFUM',
    category: 'woody',
    price: 'AED 950',
    priceNum: 950,
    volume: '60ML',
    notes: 'Smoky Leather · Saffron · Aged Oud',
    description: 'A nocturnal masterpiece of smoked incense, rare black orchid, and creamy sandalwood.',
    tag: 'EXCLUSIVE',
    image: '/p2.png',
    pedestalTone: '#d9ccb8',
  },
  {
    id: 'ruh',
    name: 'Ruh',
    urduName: 'روح',
    subtitle: 'EXTRAIT DE PARFUM',
    category: 'fresh',
    price: 'AED 1,050',
    priceNum: 1050,
    volume: '60ML',
    notes: 'Taif Rose · Italian Bergamot · Ocean Ambergris',
    description: 'A serene oceanic symphony with pure Taif roses, zesty Italian bergamot, and sunlit ambergris.',
    tag: 'ROYAL EDITION',
    image: '/p3.png',
    pedestalTone: '#e1d7c8',
  },
  {
    id: 'mehfil',
    name: 'Mehfil',
    urduName: 'محفل',
    subtitle: 'EXTRAIT DE PARFUM',
    category: 'floral',
    price: 'AED 1,100',
    priceNum: 1100,
    volume: '60ML',
    notes: 'Damascus Rose · Peony · Wild Lychee',
    description: 'A grand celebratory bouquet of velvet Damascus rose petals, pink peony, and golden Madagascar vanilla.',
    tag: 'EXCLUSIVE',
    image: '/p4.png',
    pedestalTone: '#eedec9',
  },
  {
    id: 'zareen',
    name: 'Zareen',
    urduName: 'زریں',
    subtitle: 'EXTRAIT DE PARFUM',
    category: 'floral',
    price: 'AED 1,150',
    priceNum: 1150,
    volume: '60ML',
    notes: 'Midnight Plum · Golden Suede · Amber',
    description: 'Velvety midnight plum enriched with seductive golden suede, warm tonka bean, and crystal amber.',
    tag: 'BESTSELLER',
    image: '/p5.png',
    pedestalTone: '#e3d2be',
  },
  {
    id: 'hayat',
    name: 'Hayat',
    urduName: 'حیات',
    subtitle: 'EXTRAIT DE PARFUM',
    category: 'woody',
    price: 'AED 1,100',
    priceNum: 1100,
    volume: '60ML',
    notes: 'Smoky Vetiver · Cedarwood · Ambergris',
    description: 'A tribute to eternal vitality featuring smoky Haitian vetiver, aged atlas cedarwood, and resinous amber.',
    tag: 'SIGNATURE',
    image: '/p6.png',
    pedestalTone: '#dfd1be',
  },
  {
    id: 'sukoon',
    name: 'Sukoon',
    urduName: 'سکون',
    subtitle: 'EXTRAIT DE PARFUM',
    category: 'oriental',
    price: 'AED 1,200',
    priceNum: 1200,
    volume: '60ML',
    notes: 'Solar Amber · White Sandalwood · Vanilla',
    description: 'Absolute inner peace woven with warm solar amber, soothing Mysore sandalwood, and imperial vanilla.',
    tag: 'ROYAL EDITION',
    image: '/p7.png',
    pedestalTone: '#eadbc6',
  },
];

interface FragranceCollectionProps {
  onAddToCart: (product: ProductItem) => void;
  onProductSelect?: (product: ProductItem) => void;
}

export const FragranceCollection: React.FC<FragranceCollectionProps> = ({
  onAddToCart,
  onProductSelect,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'all' | 'oriental' | 'woody' | 'floral' | 'fresh'>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProducts = activeTab === 'all'
    ? collectionProducts
    : collectionProducts.filter((p) => p.category === activeTab);

  const handleAddClick = (e: React.MouseEvent, product: ProductItem) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const handleCardClick = (product: ProductItem) => {
    if (onProductSelect) {
      onProductSelect(product);
    }
  };

  return (
    <section className={`editorial-collection-section ${isInView ? 'in-view' : ''}`} id="collection" ref={sectionRef}>
      {/* Background Soft Glow */}
      <div className="collection-bg-glow"></div>

      <div className="collection-wrapper">
        {/* Editorial Header Row: Left Title & Right Single-Line Scrollable Tabs */}
        <div className="editorial-header-row">
          {/* Left Side: Curated For Royalty Title */}
          <div className="editorial-header-left">
            <div className="kicker-badge">
              <span className="editorial-kicker">CURATED FOR ROYALTY</span>
            </div>
            <h2 className="editorial-title">
              <span className="title-line">Our recommendation for</span>
              <span className="title-line title-highlight">your personality</span>
            </h2>
          </div>

          {/* Right Side: Single-Line Horizontally Scrollable Collection Tabs */}
          <div className="editorial-header-right">
            <div className="tabs-scroll-container">
              <div className="editorial-tabs-track">
                <button
                  className={`editorial-tab-pill ${activeTab === 'all' ? 'active-pill' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  <span>All Creations ({collectionProducts.length})</span>
                </button>
                <button
                  className={`editorial-tab-pill ${activeTab === 'oriental' ? 'active-pill' : ''}`}
                  onClick={() => setActiveTab('oriental')}
                >
                  <span>Oriental & Oud</span>
                </button>
                <button
                  className={`editorial-tab-pill ${activeTab === 'woody' ? 'active-pill' : ''}`}
                  onClick={() => setActiveTab('woody')}
                >
                  <span>Woody & Leather</span>
                </button>
                <button
                  className={`editorial-tab-pill ${activeTab === 'floral' ? 'active-pill' : ''}`}
                  onClick={() => setActiveTab('floral')}
                >
                  <span>Floral & Rose</span>
                </button>
                <button
                  className={`editorial-tab-pill ${activeTab === 'fresh' ? 'active-pill' : ''}`}
                  onClick={() => setActiveTab('fresh')}
                >
                  <span>Fresh & Aqua</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Editorial Products Grid (p1 to p7) */}
        <div className="editorial-products-grid" key={activeTab}>
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="editorial-product-card"
              style={{ animationDelay: `${idx * 0.18}s`, cursor: 'pointer' }}
              onClick={() => handleCardClick(product)}
            >
              {/* Unified Editorial Studio Frame with Travertine Pedestal */}
              <div className="editorial-image-frame">
                {/* Warm Golden Hour Light Ray */}
                <div className="editorial-sunlight-ray"></div>

                {/* Soft Botanical Silk Backdrop */}
                <div className="editorial-backdrop-drape"></div>

                {/* Central Bottle Showcase */}
                <div className="editorial-bottle-stage">
                  <img
                    src={product.image}
                    alt={`${product.name} Extrait De Parfum`}
                    className="editorial-bottle-img"
                    loading="lazy"
                  />
                </div>

                {/* Travertine Stone Pedestal Slab */}
                <div
                  className="travertine-pedestal-slab"
                  style={{ backgroundColor: product.pedestalTone }}
                >
                  <div className="slab-top-bevel"></div>
                  <div className="bottle-travertine-shadow"></div>
                </div>

                {/* Quick Add To Bag Hover Action */}
                <button
                  className={`editorial-quick-add ${addedId === product.id ? 'is-added' : ''}`}
                  onClick={(e) => handleAddClick(e, product)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  {addedId === product.id ? (
                    <>
                      <Check size={14} />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={14} />
                      <span>ADD TO BAG</span>
                    </>
                  )}
                </button>
              </div>

              {/* Bottom Meta Information */}
              <div className="editorial-meta-row">
                <div className="meta-left-details">
                  <div className="product-name-urdu">
                    <span className="name-en">{product.name}</span>
                    <span className="name-ar">({product.urduName})</span>
                  </div>
                  <p className="product-olfactory-notes">{product.notes}</p>
                </div>

                <div className="meta-right-price">
                  <span className="product-exact-price">{product.price}</span>
                  <span className="product-volume-label">{product.volume}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
