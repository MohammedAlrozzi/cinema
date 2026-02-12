import React from 'react';
import { useTranslation } from 'react-i18next';
import './Blog.css';

const Blog: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">{t('blogTitle')}</h2>
          <p className="blog-subtitle">{t('blogSubtitle')}</p>
        </div>

        <div className="blog-grid">
          <article className="blog-card featured">
            <div className="blog-image">📝</div>
            <div className="blog-tag">{t('featured')}</div>
            <h3>{t('blog1Title')}</h3>
            <p className="blog-excerpt">{t('blog1Excerpt')}</p>
            <div className="blog-meta">
              <span>📅 {t('blog1Date')}</span>
              <span>👤 {t('blog1Author')}</span>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image">🎓</div>
            <h3>{t('blog2Title')}</h3>
            <p className="blog-excerpt">{t('blog2Excerpt')}</p>
            <div className="blog-meta">
              <span>📅 {t('blog2Date')}</span>
              <span>👤 {t('blog2Author')}</span>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image">🌍</div>
            <h3>{t('blog3Title')}</h3>
            <p className="blog-excerpt">{t('blog3Excerpt')}</p>
            <div className="blog-meta">
              <span>📅 {t('blog3Date')}</span>
              <span>👤 {t('blog3Author')}</span>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image">💡</div>
            <h3>{t('blog4Title')}</h3>
            <p className="blog-excerpt">{t('blog4Excerpt')}</p>
            <div className="blog-meta">
              <span>📅 {t('blog4Date')}</span>
              <span>👤 {t('blog4Author')}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;
