import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-us">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">{t('aboutTitle')}</h2>
          <div className="cinema-icon">🎬✨</div>
        </div>
        
        <div className="about-content">
          <div className="about-card">
            <div className="card-icon">🎥</div>
            <h3>{t('ourMission')}</h3>
            <p>{t('missionText')}</p>
          </div>

          <div className="about-card">
            <div className="card-icon">🤝</div>
            <h3>{t('communityBased')}</h3>
            <p>{t('communityText')}</p>
          </div>

          <div className="about-card">
            <div className="card-icon">💝</div>
            <h3>{t('volunteerDriven')}</h3>
            <p>{t('volunteerText')}</p>
          </div>

          <div className="about-card">
            <div className="card-icon">📚</div>
            <h3>{t('learningResource')}</h3>
            <p>{t('learningText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
