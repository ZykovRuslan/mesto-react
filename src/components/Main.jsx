import React from 'react';
import {api} from '../utils/Api'
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards([...res]);
      })
      .catch((err) => console.log(err));
  }, []);

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
              src={userAvatar}
              className='profile__avatar'
              alt='Аватар'
            />
          </button>
          <div className='profile__info'>
            <div className='profile__row-top'>
              <h1 className='profile__name'>{userName}</h1>
              <button
                onClick={onEditProfile}
                className='profile__edit-button opacity'
                aria-label='редактирование профиля'
                type='button' />
            </div>
            <p className='profile__about-me'>{userDescription}</p>
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
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
