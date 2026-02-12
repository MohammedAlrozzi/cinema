import React from 'react';
import { useTranslation } from 'react-i18next';
import './Journey.css';

const Journey: React.FC = () => {
  const { t } = useTranslation();

  const phases = [
    {
      icon: '🌱',
      titleKey: 'phase1Title',
      descKey: 'phase1Desc',
      yearKey: 'phase1Year',
    },
    {
      icon: '🎬',
      titleKey: 'phase2Title',
      descKey: 'phase2Desc',
      yearKey: 'phase2Year',
    },
    {
      icon: '🌟',
      titleKey: 'phase3Title',
      descKey: 'phase3Desc',
      yearKey: 'phase3Year',
    },
    {
      icon: '🚀',
      titleKey: 'phase4Title',
      descKey: 'phase4Desc',
      yearKey: 'phase4Year',
    },
  ];

  return (
    <section id="journey" className="journey">
      <div className="journey-container">
        <div className="journey-header">
          <h2 className="journey-title">{t('journeyTitle')}</h2>
          <p className="journey-subtitle">{t('journeySubtitle')}</p>
        </div>

        <div className="timeline">
          {phases.map((phase, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="phase-icon">{phase.icon}</div>
                <div className="phase-year">{t(phase.yearKey)}</div>
                <h3 className="phase-title">{t(phase.titleKey)}</h3>
                <p className="phase-description">{t(phase.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
