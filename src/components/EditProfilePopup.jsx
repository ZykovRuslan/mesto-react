import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  return (
    <PopupWithForm
      name='edit'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={'Сохранить'}
      children={
        <>
          <label className='popup__field'>
            <input
              type='text'
              required
              className='popup__input popup__input_data_name'
              placeholder='Имя профиля'
              name='input-name'
              id='name-input'
              minLength='2'
              maxLength='40'
              autoComplete='off'
              onChange={handleNameChange}
              value={name || ''}
            />
            <span className='popup__input-error name-input-error'></span>
          </label>
          <label className='popup__field'>
            <input
              type='text'
              required
              className='popup__input popup__input_data_job'
              placeholder='Вид деятельности'
              name='input-job'
              id='job-input'
              minLength='2'
              maxLength='200'
              onChange={handleDescriptionChange}
              value={description || ''}
            />
            <span className='popup__input-error job-input-error'></span>
          </label>
        </>
      }
    />
  );
}

export default EditProfilePopup;
