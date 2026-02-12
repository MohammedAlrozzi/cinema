import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="footer-emoji">🎬</span>
            {t('appName')}
          </h3>
          <p className="footer-description">{t('footerDesc')}</p>
        </div>

        <div className="footer-section">
          <h4 className="section-title">{t('getInvolved')}</h4>
          <p className="section-text">{t('getInvolvedText')}</p>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
