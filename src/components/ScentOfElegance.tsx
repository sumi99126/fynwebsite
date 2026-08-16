import React, { useEffect, useRef, useState } from 'react';
import './ScentOfElegance.css';

export const ScentOfElegance: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollYOffset, setScrollYOffset] = useState<number>(0);
  const [scrollRotate, setScrollRotate] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is visible in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsInView(true);
        // Calculate scroll offset relative to center of viewport
        const centerDistance = rect.top + rect.height / 2 - windowHeight / 2;
        const normalized = centerDistance / windowHeight; // e.g. -0.5 to 0.5
        setScrollYOffset(normalized * -32); // Moves up/down by ~16px
        setScrollRotate(normalized * -3.5); // Tilts gently by ~2-3deg
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="scent-elegance-section" id="craftsmanship" ref={sectionRef}>
      <div className="scent-elegance-container">
        {/* Section Header */}
        <div className="scent-elegance-header">
          <span className="scent-kicker">CRAFTSMANSHIP & PURITY</span>
          <h2 className="scent-elegance-title">
            Scent <span className="title-of-italic">of</span> Elegance
          </h2>
          <p className="scent-elegance-subtitle">
            Every bottle of FYN is a testament to uncompromising artistry, formulated with rare botanical essences and delivered with sustainable luxury.
          </p>
        </div>

        {/* Interactive Feature Anatomy Stage */}
        <div className="scent-anatomy-stage">
          {/* Left Column Features with Guidelines */}
          <div className="anatomy-features-col left-features">
            {/* Feature 1 */}
            <div className="anatomy-feature-item left-item item-top">
              <div className="feature-text-block">
                <h4 className="feature-item-heading">Direct delivery to your door.</h4>
                <p className="feature-item-desc">Sustainable bottles and recyclable materials.</p>
              </div>
              <div className="feature-connector-line left-line">
                <span className="connector-dot"></span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="anatomy-feature-item left-item item-middle">
              <div className="feature-text-block">
                <h4 className="feature-item-heading">Long-Lasting Scents</h4>
                <p className="feature-item-desc">Sustainable bottles and recyclable materials.</p>
              </div>
              <div className="feature-connector-line left-line">
                <span className="connector-dot"></span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="anatomy-feature-item left-item item-bottom">
              <div className="feature-text-block">
                <h4 className="feature-item-heading">Eco-Friendly Packaging</h4>
                <p className="feature-item-desc">Sustainable bottles and recyclable materials.</p>
              </div>
              <div className="feature-connector-line left-line">
                <span className="connector-dot"></span>
              </div>
            </div>
          </div>

          {/* Center Bottle Showcase with Smooth Scroll Parallax Transition */}
          <div className="anatomy-center-bottle">
            <div className="bottle-radial-glow"></div>
            <div 
              className={`bottle-floating-wrap ${isInView ? 'bottle-in-view' : ''}`}
              style={{
                transform: `translate3d(0, ${scrollYOffset}px, 0) rotate(${scrollRotate}deg)`,
                transition: 'transform 0.18s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              <img 
                src="/p1.png" 
                alt="FYN Khwaab Extrait De Parfum" 
                className="anatomy-bottle-img"
              />
              <div className="anatomy-bottle-shadow"></div>
            </div>
          </div>

          {/* Right Column Features with Guidelines */}
          <div className="anatomy-features-col right-features">
            {/* Feature 4 */}
            <div className="anatomy-feature-item right-item item-top-right">
              <div className="feature-connector-line right-line">
                <span className="connector-dot"></span>
              </div>
              <div className="feature-text-block">
                <h4 className="feature-item-heading">Premium Ingredients</h4>
                <p className="feature-item-desc">Sustainable bottles and recyclable materials.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="anatomy-feature-item right-item item-bottom-right">
              <div className="feature-connector-line right-line">
                <span className="connector-dot"></span>
              </div>
              <div className="feature-text-block">
                <h4 className="feature-item-heading">Free Worldwide Delivery</h4>
                <p className="feature-item-desc">Sustainable bottles and recyclable materials.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
