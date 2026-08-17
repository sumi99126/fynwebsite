import React, { useEffect, useRef, useState } from 'react';
import './RefinedMoments.css';

interface RefinedMomentsProps {
  onExploreCollection?: () => void;
}

export const RefinedMoments: React.FC<RefinedMomentsProps> = ({ onExploreCollection }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToCollection = () => {
    if (onExploreCollection) {
      onExploreCollection();
    } else {
      const el = document.getElementById('collection');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className={`refined-moments-section ${isInView ? 'in-view' : ''}`} id="moments" ref={sectionRef}>
      {/* Decorative Wavy Lines on Right (FYN Luxury Gold Theme) */}
      <div className="moments-decor-waves">
        <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20C30 20 40 40 60 40C80 40 90 20 110 20" stroke="#c4a162" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M10 45C30 45 40 65 60 65C80 65 90 45 110 45" stroke="#c4a162" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M10 70C30 70 40 90 60 90C80 90 90 70 110 70" stroke="#c4a162" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M10 95C30 95 40 115 60 115C80 115 90 95 110 95" stroke="#c4a162" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="refined-moments-container">
        {/* Section Header */}
        <div className="refined-moments-header">
          <div className="moments-pill-badge">
            <span>Favorite Fragrances</span>
          </div>
          <h2 className="refined-moments-title">
            Refined Scents <span className="title-highlight">for Every Moment</span>
          </h2>
        </div>

        {/* 5-Card Bento Showcase Grid */}
        <div className="moments-grid-layout">
          {/* Left Column: 2 Cards Stacked */}
          <div className="moments-side-col left-col">
            {/* Card 1: Fresh / Daytime */}
            <div className="moment-card card-fresh">
              <img 
                src="/lifestyle-fresh.png" 
                alt="Fresh Daytime Scent" 
                className="moment-card-bg"
              />
              <div className="moment-card-overlay">
                <p className="moment-card-copy">
                  A light and refreshing fragrance with clean notes, perfect for everyday confidence and effortless style.
                </p>
                <button className="moment-arrow-btn" onClick={scrollToCollection} aria-label="Explore Fragrance">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2: Golden Amber / Night */}
            <div className="moment-card card-amber">
              <img 
                src="/lifestyle-amber.png" 
                alt="Golden Amber Night Fragrance" 
                className="moment-card-bg"
              />
              <div className="moment-card-overlay">
                <p className="moment-card-copy">
                  A deep and intense scent crafted for the night, blending richness and elegance for a lasting impression.
                </p>
                <button className="moment-arrow-btn" onClick={scrollToCollection} aria-label="Explore Fragrance">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Center Column: Tall Hero Highlight Card */}
          <div className="moments-center-col">
            <div className="moment-card card-center-hero">
              <img 
                src="/lifestyle-midnight.png" 
                alt="Midnight Seduction Fragrance" 
                className="moment-card-bg center-hero-bg"
              />
              <div className="moment-card-overlay hero-overlay">
                <p className="moment-card-copy hero-copy">
                  A smooth and refined aroma with subtle warmth, designed to elevate your presence with sophistication.
                </p>
                <button className="moment-arrow-btn hero-arrow-btn" onClick={scrollToCollection} aria-label="Explore Fragrance">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Cards Stacked */}
          <div className="moments-side-col right-col">
            {/* Card 3: Velvet Rose */}
            <div className="moment-card card-rose">
              <img 
                src="/lifestyle-rose.png" 
                alt="Velvet Rose Statement" 
                className="moment-card-bg"
              />
              <div className="moment-card-overlay">
                <p className="moment-card-copy">
                  A bold and energetic fragrance with rich undertones, ideal for making a strong and confident statement.
                </p>
                <button className="moment-arrow-btn" onClick={scrollToCollection} aria-label="Explore Fragrance">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 4: Ocean Mist / Aqua */}
            <div className="moment-card card-aqua">
              <img 
                src="/lifestyle-aqua.png" 
                alt="Ocean Mist Calm Scent" 
                className="moment-card-bg"
              />
              <div className="moment-card-overlay">
                <p className="moment-card-copy">
                  A cool and calming scent with fresh aquatic notes, perfect for a relaxed and modern feel.
                </p>
                <button className="moment-arrow-btn" onClick={scrollToCollection} aria-label="Explore Fragrance">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button: Centered & Appears After All Cards */}
        <div className="moments-center-cta">
          <button className="discover-collection-btn" onClick={scrollToCollection}>
            <span>Discover Collection</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
