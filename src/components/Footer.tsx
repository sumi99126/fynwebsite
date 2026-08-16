import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="fyn-footer-section">
      <div className="fyn-footer-container">
        {/* 3-Column Top Grid */}
        <div className="fyn-footer-main-grid">
          {/* Left Column: Kuwait Contact Details */}
          <div className="footer-col footer-contact-col">
            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <a href="tel:+96550084784" className="footer-contact-link">+965 50084784</a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <a href="mailto:concierge@fynperfume.com" className="footer-contact-link">concierge@fynperfume.com</a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <span className="footer-contact-text">
                Al Hamra Luxury Center, Sharq, Kuwait City, Kuwait
              </span>
            </div>
          </div>

          {/* Center Column: Only Big Logo & 4 Social Circles (No Text) */}
          <div className="footer-col footer-brand-center">
            <div className="footer-logo-brand-wrap">
              <img 
                src="/logo.png" 
                alt="FYN Perfume Logo" 
                className="footer-logo-img"
              />
            </div>

            {/* Exactly 4 Circular Social Media Icons */}
            <div className="footer-social-icons-row">
              {/* 1. Official WhatsApp */}
              <a
                href="https://wa.me/96550084784"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* 2. Official FYN Instagram */}
              <a
                href="https://www.instagram.com/fyn_perfume/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* 3. Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* 4. Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Twitter / X"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Quote */}
          <div className="footer-col footer-narrative-col">
            <p className="footer-narrative-quote">
              Experience a world of luxurious fragrances crafted to elevate your presence and define your signature scent.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Divider & Lightened Copyright */}
        <div className="fyn-footer-bottom-bar">
          <p className="footer-copyright-text">
            Copyright © 2026 FYN Perfume. All Rights Reserved. Crafted for Royalty.
          </p>
        </div>
      </div>
    </footer>
  );
};
