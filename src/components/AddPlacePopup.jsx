import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      name='add'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={'Добавить'}
      children={
        <>
          <label className='popup__field'>
            <input
              type='text'
              required
              className='popup__input popup__input_data_title'
              placeholder='Название'
              name='input-title'
              id='title-input'
              minLength='2'
              maxLength='30'
              onChange={handleNameChange}
              value={name}
            />
            <span className='popup__input-error title-input-error'></span>
          </label>
          <label className='popup__field'>
            <input
              type='url'
              required
              className='popup__input popup__input_data_photo'
              placeholder='Ссылка на картинку'
              name='input-photo'
              id='url-input'
              onChange={handleLinkChange}
              value={link}
            />
            <span className='popup__input-error url-input-error'></span>
          </label>
        </>
      }
    />
  );
}

export default AddPlacePopup;
