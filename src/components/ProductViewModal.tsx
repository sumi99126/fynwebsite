import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Check } from 'lucide-react';
import { ProductItem } from './FragranceCollection';
import './ProductViewModal.css';

interface ProductViewModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: ProductItem, quantity: number) => void;
}

export const ProductViewModal: React.FC<ProductViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setIsAdded(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  return (
    <div className="fyn-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="fyn-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="fyn-modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="fyn-modal-body-grid">
          {/* Left Column: Clean Bottle Visual Stage */}
          <div className="fyn-modal-visual-col">
            <div className="fyn-modal-stage">
              <div className="modal-sunlight-aura" />

              <div className="modal-bottle-wrap">
                <img
                  src={product.image}
                  alt={`${product.name} Extrait De Parfum`}
                  className="modal-bottle-img"
                />
              </div>

              {/* Travertine Pedestal */}
              <div
                className="modal-pedestal-slab"
                style={{ backgroundColor: product.pedestalTone || '#e0d2bf' }}
              >
                <div className="modal-slab-bevel" />
                <div className="modal-slab-shadow" />
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Simple Details */}
          <div className="fyn-modal-info-col">
            <span className="modal-kicker">HAUTE PARFUMERIE</span>

            <div className="modal-title-row">
              <h2 className="modal-product-title">{product.name}</h2>
              <span className="modal-urdu-title">({product.urduName})</span>
            </div>

            <span className="modal-subtitle">
              {product.subtitle} · {product.volume}
            </span>

            <div className="modal-price-tag">
              {product.price}
            </div>

            <p className="modal-desc-text">
              {product.description}
            </p>

            <div className="modal-notes-box">
              <span className="modal-notes-label">OLFACTORY NOTES:</span>
              <p className="modal-notes-val">{product.notes}</p>
            </div>

            {/* Action Row: Quantity + Same ADD TO BAG Button */}
            <div className="modal-action-row">
              <div className="modal-quantity-stepper">
                <button
                  type="button"
                  className="step-btn"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="step-val">{quantity}</span>
                <button
                  type="button"
                  className="step-btn"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Same ADD TO BAG Button Text */}
              <button
                className={`modal-add-to-bag-btn ${isAdded ? 'is-added' : ''}`}
                onClick={handleAdd}
              >
                {isAdded ? (
                  <>
                    <Check size={16} />
                    <span>ADDED TO BAG</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>ADD TO BAG</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
