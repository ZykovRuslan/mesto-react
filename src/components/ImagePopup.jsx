import React from 'react';

function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_type_photo overlay ${card ? 'popup_opened' : ''}`}>
      <div className='popup__container popup__container_type_photo'>
        <button 
          onClick={onClose}
          className='popup__close-button opacity' 
          aria-label='закрыть' 
          type='button'>
        </button>
        <img 
          src={card ? card.link : '#'} 
          className='popup__photo' 
          alt={card ? card.name : ''} 
        />
        <p className='popup__subtitle'>{card ? card.name : ''}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
