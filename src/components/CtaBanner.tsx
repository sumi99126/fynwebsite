import React, { useEffect, useRef } from 'react';
import './CtaBanner.css';

interface CtaBannerProps {
  onExplore?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onExplore }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const yOffset = (progress - 0.5) * 20;
        bgRef.current.style.transform = `translate3d(0, ${yOffset}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToCollection = () => {
    if (onExplore) {
      onExplore();
    } else {
      const el = document.getElementById('collection');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="fyn-fullwidth-parallax-cta" ref={sectionRef} id="experience">
      {/* Background Image Anchored to Bottom to Show Full Reflection and Bottles */}
      <div className="parallax-bg-layer" ref={bgRef}>
        <img
          src="/cta-fyn-wide-champagne.png"
          alt="FYN Khwaab and Zareen Official Bottles"
          className="parallax-bg-image"
        />
      </div>

      {/* Soft Ambient Gradient Overlay for Crisp Left-Aligned Text */}
      <div className="parallax-gradient-overlay" />

      <div className="fyn-parallax-cta-container">
        <div className="fyn-parallax-cta-content">
          {/* Kicker */}
          <span className="parallax-cta-kicker">HAUTE PARFUMERIE PRIVÉE</span>

          {/* Headline */}
          <h2 className="parallax-cta-title">
            <span className="parallax-title-line">The Art of Timeless Opulence</span>
          </h2>

          {/* Narrative */}
          <p className="parallax-cta-desc">
            Handcrafted in rare micro-batches with pure aged agarwood, Taif roses, and radiant molten amber.
          </p>

          {/* Simple Button */}
          <button
            className="parallax-cta-action-btn"
            onClick={handleScrollToCollection}
          >
            <span>EXPLORE COLLECTION</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
