import React from 'react';
import { useTranslation } from 'react-i18next';
import './Resources.css';

const Resources: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="resources" className="resources">
      <div className="resources-container">
        <div className="resources-header">
          <h2 className="resources-title">{t('resourcesTitle')}</h2>
          <p className="resources-subtitle">{t('resourcesSubtitle')}</p>
        </div>

        <div className="resources-grid">
          <div className="resource-category">
            <div className="category-header">
              <div className="category-icon">🎥</div>
              <h3>{t('videoLibrary')}</h3>
            </div>
            <div className="resource-list">
              <div className="resource-item">
                <span className="item-icon">📹</span>
                <div className="item-info">
                  <h4>{t('video1Title')}</h4>
                  <p>{t('video1Desc')}</p>
                </div>
              </div>
              <div className="resource-item">
                <span className="item-icon">📹</span>
                <div className="item-info">
                  <h4>{t('video2Title')}</h4>
                  <p>{t('video2Desc')}</p>
                </div>
              </div>
              <div className="resource-item">
                <span className="item-icon">📹</span>
                <div className="item-info">
                  <h4>{t('video3Title')}</h4>
                  <p>{t('video3Desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="resource-category">
            <div className="category-header">
              <div className="category-icon">🎵</div>
              <h3>{t('audioLibrary')}</h3>
            </div>
            <div className="resource-list">
              <div className="resource-item">
                <span className="item-icon">🎧</span>
                <div className="item-info">
                  <h4>{t('audio1Title')}</h4>
                  <p>{t('audio1Desc')}</p>
                </div>
              </div>
              <div className="resource-item">
                <span className="item-icon">🎧</span>
                <div className="item-info">
                  <h4>{t('audio2Title')}</h4>
                  <p>{t('audio2Desc')}</p>
                </div>
              </div>
              <div className="resource-item">
                <span className="item-icon">🎧</span>
                <div className="item-info">
                  <h4>{t('audio3Title')}</h4>
                  <p>{t('audio3Desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="resource-category">
            <div className="category-header">
              <div className="category-icon">📚</div>
              <h3>{t('documentLibrary')}</h3>
            </div>
            <div className="resource-list">
              <div className="resource-item">
                <span className="item-icon">📄</span>
                <div className="item-info">
                  <h4>{t('doc1Title')}</h4>
                  <p>{t('doc1Desc')}</p>
                </div>
              </div>
              <div className="resource-item">
                <span className="item-icon">📄</span>
                <div className="item-info">
                  <h4>{t('doc2Title')}</h4>
                  <p>{t('doc2Desc')}</p>
                </div>
              </div>
              <div className="resource-item">
                <span className="item-icon">📄</span>
                <div className="item-info">
                  <h4>{t('doc3Title')}</h4>
                  <p>{t('doc3Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
