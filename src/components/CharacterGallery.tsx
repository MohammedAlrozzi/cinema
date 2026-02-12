import React from 'react';
import { useTranslation } from 'react-i18next';
import { sampleCharacters } from '../data/characters';
import CharacterCard from './CharacterCard';
import './CharacterGallery.css';

const CharacterGallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="characters" className="character-gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">{t('characterGallery')}</h2>
        <p className="gallery-subtitle">{t('meetCharacters')}</p>
      </div>
      
      <div className="characters-grid">
        {sampleCharacters.map((character, index) => (
          <div 
            key={character.id}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="grid-item"
          >
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharacterGallery;
