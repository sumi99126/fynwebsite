import React, { useState } from 'react';
import './FragranceFaq.css';

interface SimpleFaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: SimpleFaqItem[] = [
  {
    id: 'enduring-extraits',
    question: 'What makes FYN The Luxury Fragrance extraits so enduring?',
    answer:
      'All FYN creations are formulated exclusively as pure Extrait de Parfum with an ultra-concentrated 30% to 35% natural fragrance oil formulation. This delivers an exceptional 14+ hours of longevity on skin and an enduring, magnetic sillage that lasts all day.',
  },
  {
    id: 'uae-gcc-delivery',
    question: 'Do you deliver across the UAE and GCC countries?',
    answer:
      'Yes, we provide complimentary expedited delivery across the UAE within 24 hours, and across Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman within 2–3 business days with live tracked courier service.',
  },
  {
    id: 'discovery-samples',
    question: 'Are complimentary discovery samples included with every order?',
    answer:
      'Yes. Every full-size 60ML bottle order includes a complimentary 3ml discovery sample of the same fragrance so you can test it on your skin before opening the presentation box.',
  },
  {
    id: 'whatsapp-concierge',
    question: 'Can I place an order directly via WhatsApp Concierge?',
    answer:
      'Yes, our royal fragrance concierge is available 24/7 on WhatsApp (+965 50084784) to take bespoke orders, arrange personalized luxury gift packaging, and provide personal fragrance guidance.',
  },
  {
    id: 'flacon-storage',
    question: 'How should I store my luxury perfume flacon?',
    answer:
      'Store your flacon upright in a cool, dry area away from direct sunlight and temperature fluctuations to protect the delicate top florals and rich aged agarwood base notes.',
  },
];

export const FragranceFaq: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="simple-faq-section" id="faq">
      <div className="simple-faq-container">
        {/* Section Header Matching Exact Reference Image */}
        <div className="simple-faq-header">
          <span className="faq-kicker-label">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="simple-faq-title">
            <span className="faq-title-line">Everything you need to know</span>
            <span className="faq-title-line">about our haute fragrances</span>
          </h2>
        </div>

        {/* Clean Rounded Accordion Cards */}
        <div className="simple-faq-list">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div
                key={item.id}
                className={`simple-faq-card ${isOpen ? 'faq-open' : ''}`}
              >
                <button
                  className="simple-faq-question-btn"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="simple-question-text">{item.question}</span>
                  <div className="simple-faq-icon-circle">
                    <span className="faq-icon-symbol">{isOpen ? '−' : '+'}</span>
                  </div>
                </button>

                <div
                  className={`simple-faq-answer-collapse ${isOpen ? 'answer-expanded' : ''}`}
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                  }}
                >
                  <div className="simple-faq-answer-body">
                    <p className="simple-answer-text">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
