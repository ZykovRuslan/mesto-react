import React from 'react';

function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_type_photo overlay ${card && 'popup_opened'}`}>
      <div className='popup__container popup__container_type_photo'>
        <button 
          onClick={onClose}
          className='popup__close-button opacity' 
          aria-label='закрыть' 
          type='button'>
        </button>
        <img 
          src={card.link} 
          className='popup__photo' 
          alt={card.name} 
        />
        <p className='popup__subtitle'>{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
