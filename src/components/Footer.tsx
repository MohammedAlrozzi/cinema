import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="about" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="footer-emoji">🎬</span>
            {t('appName')}
          </h3>
          <p className="footer-description">{t('description')}</p>
        </div>

        <div className="footer-section">
          <h4 className="section-title">{t('importData')}</h4>
          <p className="section-text">{t('importDescription')}</p>
          <p className="section-note">💡 {t('sampleData')}</p>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 Gaza Children Cinema. Made with ❤️ for children everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
