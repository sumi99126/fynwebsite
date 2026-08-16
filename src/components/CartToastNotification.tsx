import React, { useEffect } from 'react';
import './CartToastNotification.css';

export interface ToastProduct {
  name: string;
  price: string | number;
  image: string;
}

interface CartToastNotificationProps {
  product: ToastProduct | null;
  isVisible: boolean;
  onClose: () => void;
}

export const CartToastNotification: React.FC<CartToastNotificationProps> = ({
  product,
  isVisible,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3800);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible || !product) return null;

  return (
    <div className="cart-toast-wrapper" role="alert" aria-live="polite">
      <div className="cart-toast-card">
        {/* Left: Product Thumbnail */}
        <div className="cart-toast-thumb-wrap">
          <img
            src={product.image}
            alt={product.name}
            className="cart-toast-thumb"
          />
          <span className="cart-toast-badge-check">✓</span>
        </div>

        {/* Center: Info */}
        <div className="cart-toast-info">
          <span className="cart-toast-status">ADDED TO YOUR BAG</span>
          <h4 className="cart-toast-title">{product.name}</h4>
          <span className="cart-toast-price">
            {typeof product.price === 'number' ? `AED ${product.price}` : product.price}
          </span>
        </div>

        {/* Right: Dismiss Button */}
        <button
          className="cart-toast-close-btn"
          onClick={onClose}
          aria-label="Dismiss notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
