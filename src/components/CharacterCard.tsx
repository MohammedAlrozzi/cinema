import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Character } from '../data/characters';
import './CharacterCard.css';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const name = isArabic ? character.nameAr : character.name;
  const personality = isArabic ? character.personalityAr : character.personality;
  const favoriteActivity = isArabic ? character.favoriteActivityAr : character.favoriteActivity;
  const description = isArabic ? character.descriptionAr : character.description;

  return (
    <div 
      className="character-card"
      style={{ '--card-color': character.color } as React.CSSProperties}
    >
      <div className="card-header">
        <div className="character-emoji">{character.emoji}</div>
        <h3 className="character-name">{name}</h3>
      </div>
      
      <div className="card-body">
        <p className="character-description">{description}</p>
        
        <div className="character-details">
          <div className="detail-item">
            <span className="detail-label">{t('age')}:</span>
            <span className="detail-value">{character.age}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">{t('personality')}:</span>
            <span className="detail-value">{personality}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">{t('favoriteActivity')}:</span>
            <span className="detail-value">{favoriteActivity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
