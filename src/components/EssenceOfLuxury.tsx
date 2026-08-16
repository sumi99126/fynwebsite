import React from 'react';
import './EssenceOfLuxury.css';

export const EssenceOfLuxury: React.FC = () => {
  return (
    <section className="essence-luxury-section" id="about">
      <div className="essence-luxury-container">
        {/* Left Side (50% Column): Large Editorial Photo Collage */}
        <div className="essence-left-col">
          <div className="essence-photo-collage">
            {/* Top Left Image: Wood Cap Bottle */}
            <div className="collage-card card-top-left">
              <img 
                src="/about-wood.png" 
                alt="Artisanal FYN Perfume Craftsmanship" 
                className="collage-img"
              />
            </div>

            {/* Bottom Left Image: Model Portrait (Overlapping) */}
            <div className="collage-card card-bottom-left">
              <img 
                src="/about-model.png" 
                alt="Sensorial Fragrance Journey" 
                className="collage-img"
              />
            </div>

            {/* Right Tall Image: Golden Crystal Bottle (Clean Gap) */}
            <div className="collage-card card-right-tall">
              <img 
                src="/about-gold.png" 
                alt="Golden Amber Extrait De Parfum" 
                className="collage-img"
              />
            </div>
          </div>
        </div>

        {/* Right Side (50% Column): Brand Headline "Find Your Signature Note" & Story */}
        <div className="essence-right-col">
          {/* "ABOUT US" Kicker (Identical Font & Spacing to CURATED FOR ROYALTY) */}
          <div className="essence-about-kicker">
            <span className="editorial-kicker">ABOUT FYN</span>
          </div>

          <div className="essence-title-wrapper">
            <h2 className="essence-main-title">
              <span className="title-row-one">Find Your</span>
              <span className="title-row-two">Signature Note</span>
            </h2>
          </div>

          <div className="essence-story-body">
            <p className="essence-narrative">
              <span className="story-emphasis">Born from the philosophy of “Find Your Note”</span>, FYN crafts bespoke extraits de parfum blending rare Arabian agarwood, precious Grasse florals, and velvety royal ambers. Each fragrance is <span className="story-emphasis">an intimate olfactory signature</span> — an eternal luxury created exclusively for your individuality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
