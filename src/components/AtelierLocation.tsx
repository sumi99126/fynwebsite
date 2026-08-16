import React from 'react';
import './AtelierLocation.css';

export const AtelierLocation: React.FC = () => {
  const handleDirections = () => {
    window.open(
      'https://maps.google.com/?q=Al+Hamra+Luxury+Center+Kuwait+City',
      '_blank'
    );
  };

  return (
    <section className="atelier-location-section" id="atelier">
      <div className="atelier-location-container">
        <div className="atelier-location-grid">
          {/* Left Column: Kuwait Atelier Details */}
          <div className="atelier-info-col">
            <span className="atelier-kicker">VISIT OUR KUWAIT ATELIER</span>
            <h2 className="atelier-title">Kuwait City, Al Hamra Tower</h2>

            <div className="atelier-details-list">
              {/* 1. Location */}
              <div className="atelier-detail-item">
                <div className="atelier-icon-circle">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="atelier-text-block">
                  <h4 className="detail-item-heading">Atelier Location</h4>
                  <p className="detail-item-text">
                    Al Hamra Luxury Center (Ground Floor, Luxury Promenade), Al Shuhada St, Sharq, Kuwait City, Kuwait
                  </p>
                </div>
              </div>

              {/* 2. Hours */}
              <div className="atelier-detail-item">
                <div className="atelier-icon-circle">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="atelier-text-block">
                  <h4 className="detail-item-heading">Atelier Hours</h4>
                  <p className="detail-item-text">
                    Saturday to Thursday: 10:00 AM – 10:00 PM<br />
                    Friday: 1:30 PM – 10:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <button className="atelier-directions-btn" onClick={handleDirections}>
              <span>GET DIRECTIONS</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right Column: Kuwait Minimalist Luxury Map Card */}
          <div className="atelier-map-col">
            <div className="minimalist-map-card">
              {/* Dot Grid Blueprint Background */}
              <div className="map-dot-grid" />

              {/* Landmark Campus Block */}
              <div className="map-landmark-block">
                <span>AL HAMRA LUXURY TOWER</span>
              </div>

              {/* Street Lines & Labels */}
              <div className="map-street horizontal-street">
                <span className="street-label">AL SHUHADA BOULEVARD</span>
              </div>

              <div className="map-street vertical-street">
                <span className="street-label vertical-label">ARABIAN GULF ROAD</span>
              </div>

              {/* Pin Indicator & Floating Tooltip */}
              <div className="map-pin-anchor">
                <div className="map-pulse-ring" />
                <div className="map-pin-core" />

                {/* Tooltip Card */}
                <div className="map-tooltip-card">
                  <span className="tooltip-brand-title">FYN Haute Parfumerie</span>
                  <span className="tooltip-sub-label">KUWAIT CITY, LEVEL G</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
