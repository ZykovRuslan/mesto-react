import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card){
    setSelectedCard(card);
  }

  return (
    <div className='page'>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      {/*Попап Редактировать профиль*/}
      <PopupWithForm
        name='edit'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
              />
              <span className='popup__input-error job-input-error'></span>
            </label>
          </>
        }
      />

      {/*Попап Новое место*/}
      <PopupWithForm
        name='add'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
              />
              <span className='popup__input-error url-input-error'></span>
            </label>
          </>
        }
      />

      {/*Попап Обновить аватар*/}
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
            <label className="popup__field">
              <input type="url" 
              required 
              className="popup__input popup__input_data_link" 
              placeholder="Ссылка на аватар"
              name="input-link" 
              id="link-input" 
              />
              <span className="popup__input-error link-input-error"></span>
            </label>
        }
      />

      {/*Попап Вы уверены?*/}
      <PopupWithForm
        name='confirmation'
        title='Вы уверены?'
        isOpen={false}
      />

      {/*Попап Увеличение фото*/}
      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} 
      />

    </div>
  );
}

export default App;
