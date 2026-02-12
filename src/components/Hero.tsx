import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">{t('welcome')}</h2>
        <p className="hero-description">{t('description')}</p>
        <div className="hero-emojis">
          <span className="hero-emoji">🌟</span>
          <span className="hero-emoji">🎭</span>
          <span className="hero-emoji">🎨</span>
          <span className="hero-emoji">🎪</span>
          <span className="hero-emoji">🎬</span>
        </div>
        <button 
          className="hero-btn"
          onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('meetCharacters')} ✨
        </button>
      </div>
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
    </section>
  );
};

export default Hero;
