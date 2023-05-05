import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, children, onSubmit, buttonText}) {
  return (      
      <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}> 
        <div className='popup__container'>
          <h2 className='popup__title'>{`${title}`}</h2>
          <form
            className='popup__form'
            onSubmit={onSubmit}
            name={`popup-form-${name}`}
            autoComplete='off'
            /*noValidate*/>
            <fieldset className='popup__set'>
              {children}
              <button className='popup__submit-button' aria-label='сохранить' type='submit'>
                {buttonText}
              </button>
            </fieldset>
          </form>
          <button
            onClick={onClose}
            className='popup__close-button opacity'
            aria-label='закрыть'
            type='button'></button>
        </div>
      </div>
  );
}

export default PopupWithForm;
