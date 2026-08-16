import React, { useState } from 'react';
import { ShoppingBag, Check, Sparkles, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import './SignatureCollection.css';

export interface SignatureProduct {
  id: string;
  name: string;
  urduName: string;
  subtitle: string;
  category: 'all' | 'oriental' | 'woody' | 'fresh' | 'floral';
  price: string;
  priceNum: number;
  volume: string;
  notes: string;
  tag?: string;
  image: string;
  pedestalTone: string;
}

export const signatureProducts: SignatureProduct[] = [
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
    tag: 'ROYAL EDITION',
    image: '/p3.png',
    pedestalTone: '#d4cbbd',
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
    notes: 'Damascus Rose · Wild Peony · Sweet Lychee',
    tag: 'LIMITED',
    image: '/p4.png',
    pedestalTone: '#e2d3c1',
  },
  {
    id: 'zareen',
    name: 'Zareen',
    urduName: 'زرین',
    subtitle: 'EXTRAIT DE PARFUM',
    category: 'oriental',
    price: 'AED 1,150',
    priceNum: 1150,
    volume: '60ML',
    notes: 'Amethyst Plum · Golden Suede · Tonka Bean',
    tag: 'PREMIUM',
    image: '/p5.png',
    pedestalTone: '#decbb9',
  },
  {
    id: 'safar',
    name: 'Safar',
    urduName: 'سفر',
    subtitle: 'EXTRAIT DE PARFUM',
    category: 'woody',
    price: 'AED 980',
    priceNum: 980,
    volume: '60ML',
    notes: 'Emerald Vetiver · Atlas Cedar · Crisp Pine',
    image: '/p6.png',
    pedestalTone: '#d2c9b7',
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
    notes: 'White Sandalwood · Warm Vanilla · Solar Musk',
    tag: 'ICONIC',
    image: '/p7.png',
    pedestalTone: '#ecdcc5',
  },
];

interface SignatureCollectionProps {
  onAddToCart: (product: SignatureProduct) => void;
}

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'oriental' | 'woody' | 'floral' | 'fresh'>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredList = activeCategory === 'all'
    ? signatureProducts
    : signatureProducts.filter(p => p.category === activeCategory);

  const handleAdd = (item: SignatureProduct) => {
    onAddToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section className="sig-collection-section" id="all-products">
      {/* Editorial Decorative Background Accents */}
      <div className="sig-bg-glow"></div>
      
      <div className="sig-container">
        {/* Section Header Row */}
        <div className="sig-header-row">
          <div className="sig-header-left">
            <div className="sig-kicker-wrap">
              <Sparkles size={13} className="sig-sparkle-icon" />
              <span className="sig-kicker">HAUTE PARFUMERIE ARCHIVE</span>
            </div>
            <h2 className="sig-title">
              The Master Perfumer's<br />
              <span className="sig-title-accent">Signature Editions</span>
            </h2>
            <p className="sig-subtitle">
              Handcrafted in Grasse and Dubai with precious aged extraits, rare wild oud, and celestial floral botanicals.
            </p>
          </div>

          {/* Category Filter Pills & Count */}
          <div className="sig-header-right">
            <div className="sig-filter-bar">
              <div className="sig-filter-label">
                <SlidersHorizontal size={13} />
                <span>FILTER BY NOTES:</span>
              </div>
              <div className="sig-filter-pills">
                <button
                  className={`sig-pill-btn ${activeCategory === 'all' ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory('all')}
                >
                  All Editions ({signatureProducts.length})
                </button>
                <button
                  className={`sig-pill-btn ${activeCategory === 'oriental' ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory('oriental')}
                >
                  Amber & Oud
                </button>
                <button
                  className={`sig-pill-btn ${activeCategory === 'woody' ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory('woody')}
                >
                  Woody & Leather
                </button>
                <button
                  className={`sig-pill-btn ${activeCategory === 'floral' ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory('floral')}
                >
                  Rose & Floral
                </button>
                <button
                  className={`sig-pill-btn ${activeCategory === 'fresh' ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory('fresh')}
                >
                  Fresh & Marine
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Luxury Product Grid (Showing p1 to p7) */}
        <div className="sig-products-grid">
          {filteredList.map((product, index) => (
            <div 
              key={product.id} 
              className="sig-product-card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Product Visual Studio Frame */}
              <div className="sig-image-stage">
                {/* Luxury Tag Badge */}
                {product.tag && (
                  <div className="sig-card-tag">
                    <span>{product.tag}</span>
                  </div>
                )}

                {/* Sunlit Amber Highlight */}
                <div className="sig-sunlight-beam"></div>

                {/* Silk Drape Background */}
                <div className="sig-silk-veil"></div>

                {/* Central Perfume Bottle */}
                <div className="sig-bottle-wrapper">
                  <img
                    src={product.image}
                    alt={`${product.name} Perfume`}
                    className="sig-bottle-image"
                    loading="lazy"
                  />
                </div>

                {/* Travertine Stone Pedestal Base */}
                <div
                  className="sig-travertine-pedestal"
                  style={{ backgroundColor: product.pedestalTone }}
                >
                  <div className="sig-pedestal-bevel"></div>
                  <div className="sig-pedestal-shadow"></div>
                </div>

                {/* Hover Quick Action: Add to Bag */}
                <button
                  className={`sig-quick-add-btn ${addedId === product.id ? 'added-success' : ''}`}
                  onClick={() => handleAdd(product)}
                  aria-label={`Add ${product.name} to luxury cart`}
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
                      <ArrowUpRight size={13} className="sig-add-arrow" />
                    </>
                  )}
                </button>
              </div>

              {/* Product Meta Row (Exact match to Reference Design) */}
              <div className="sig-meta-row">
                <div className="sig-meta-left">
                  <div className="sig-product-title-row">
                    <span className="sig-product-name">{product.name}</span>
                    <span className="sig-product-urdu">({product.urduName})</span>
                  </div>
                  <p className="sig-product-notes">{product.notes}</p>
                </div>

                <div className="sig-meta-right">
                  <span className="sig-product-price">{product.price}</span>
                  <span className="sig-product-vol">{product.volume}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Feature Bar */}
        <div className="sig-bottom-assurance">
          <div className="assurance-item">
            <span className="assurance-bullet">✦</span>
            <span className="assurance-text">Complimentary Royal Gift Packaging</span>
          </div>
          <div className="assurance-divider"></div>
          <div className="assurance-item">
            <span className="assurance-bullet">✦</span>
            <span className="assurance-text">30% Pure Extrait De Parfum Concentration</span>
          </div>
          <div className="assurance-divider"></div>
          <div className="assurance-item">
            <span className="assurance-bullet">✦</span>
            <span className="assurance-text">Express GCC & Worldwide White Glove Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
