import React, { useEffect, useState } from 'react';
import './Preloader.css';

interface PreloaderProps {
  onComplete?: () => void;
  minDuration?: number;
}

export const Preloader: React.FC<PreloaderProps> = ({ 
  onComplete, 
  minDuration = 3200 
}) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [stage, setStage] = useState<'initial' | 'glow' | 'reveal' | 'ready'>('initial');

  useEffect(() => {
    // Stage choreography
    const t1 = setTimeout(() => setStage('glow'), 200);
    const t2 = setTimeout(() => setStage('reveal'), 600);
    const t3 = setTimeout(() => setStage('ready'), 2200);

    // Progress counter animation
    const intervalTime = 30;
    const steps = minDuration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }, 400);
      }
    }, intervalTime);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
    };
  }, [minDuration, onComplete]);

  return (
    <div className={`preloader-wrapper ${isExiting ? 'preloader-exit' : ''}`}>
      {/* Deep Obsidian Background & Ambient Glow */}
      <div className="preloader-ambient-bg">
        <div className={`ambient-glow-circle ${stage !== 'initial' ? 'glow-active' : ''}`} />
        <div className="ambient-particles">
          {[...Array(12)].map((_, i) => (
            <span 
              key={i} 
              className="gold-particle"
              style={{
                left: `${10 + (i * 7.5)}%`,
                animationDelay: `${i * 0.35}s`,
                animationDuration: `${3 + (i % 3)}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="preloader-content">
        {/* Logo Container with Golden Aura and Sheen Light Reflection (No Circle) */}
        <div className={`logo-stage ${stage !== 'initial' ? 'stage-active' : ''}`}>
          <div className="logo-image-frame">
            <img 
              src="/logo.png" 
              alt="FYN PERFUME" 
              className="preloader-logo"
            />
            {/* Shimmer light sweep */}
            <div className="logo-sheen-sweep"></div>
          </div>
        </div>

        {/* Brand Title & Typography */}
        <div className={`brand-details ${stage === 'reveal' || stage === 'ready' ? 'brand-show' : ''}`}>
          <h1 className="brand-title">
            <span className="brand-letter">F</span>
            <span className="brand-letter">Y</span>
            <span className="brand-letter">N</span>
            <span className="brand-space"> </span>
            <span className="brand-letter">P</span>
            <span className="brand-letter">E</span>
            <span className="brand-letter">R</span>
            <span className="brand-letter">F</span>
            <span className="brand-letter">U</span>
            <span className="brand-letter">M</span>
            <span className="brand-letter">E</span>
          </h1>
          <p className="brand-tagline">HAUTE PARFUMERIE</p>
        </div>

        {/* Minimal Luxury Progress Bar */}
        <div className={`progress-container ${stage === 'reveal' || stage === 'ready' ? 'progress-show' : ''}`}>
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
            <div 
              className="progress-pin" 
              style={{ left: `${progress}%` }}
            />
          </div>
          <div className="progress-status">
            <span className="status-text">INITIALIZING EXPERIENCE</span>
            <span className="progress-number">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
