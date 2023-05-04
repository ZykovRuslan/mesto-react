import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, cards}) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__align'>
          <button
            onClick={onEditAvatar}
            type='button'
            className='profile__change-button'
            aria-label='редактирование аватара'>
            <img
              src={currentUser.avatar}
              className='profile__avatar'
              alt='Аватар'
            />
          </button>
          <div className='profile__info'>
            <div className='profile__row-top'>
              <h1 className='profile__name'>{currentUser.name}</h1>
              <button
                onClick={onEditProfile}
                className='profile__edit-button opacity'
                aria-label='редактирование профиля'
                type='button' />
            </div>
            <p className='profile__about-me'>{currentUser.about}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          className='profile__add-button opacity'
          aria-label='добавление фотографии'
          type='button'></button>
      </section>
      <section aria-label='секция с картинками' className='galery'>
        {cards.map((elem) => (
          <Card
            onCardClick={onCardClick}
            link={elem.link}
            name={elem.name}
            likes={[...elem.likes]}
            key={elem._id}
            owner={elem.owner}
            _id={elem._id}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
