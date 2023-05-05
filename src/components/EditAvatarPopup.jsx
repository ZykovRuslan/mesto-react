import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={'Сохранить'}
      children={
        <label className='popup__field'>
          <input
            type='url'
            required
            className='popup__input popup__input_data_link'
            placeholder='Ссылка на аватар'
            name='input-link'
            id='link-input'
            ref={avatarRef}
          />
          <span className='popup__input-error link-input-error'></span>
        </label>
      }
    />
  );
}

export default EditAvatarPopup;
