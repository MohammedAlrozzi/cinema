import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const isArabic = i18n.language === 'ar';

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-emoji">🎬</span>
          <h1>{t('appName')}</h1>
        </div>
        
        <nav className="nav">
          <a href="#about" className="nav-link">{t('about')}</a>
          <a href="#journey" className="nav-link">{t('journey')}</a>
          <a href="#blog" className="nav-link">{t('blog')}</a>
          <a href="#resources" className="nav-link">{t('resources')}</a>
        </nav>

        <div className="controls">
          <button 
            onClick={toggleLanguage} 
            className="control-btn language-btn"
            aria-label={t('language')}
          >
            <span className="btn-icon">🌐</span>
            <span className="btn-text">{isArabic ? 'EN' : 'ع'}</span>
          </button>
          
          <button 
            onClick={toggleTheme} 
            className="control-btn theme-btn"
            aria-label={t('theme')}
          >
            <span className="btn-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
            <span className="btn-text">{t(theme === 'light' ? 'dark' : 'light')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
