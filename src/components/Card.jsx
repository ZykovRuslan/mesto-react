import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({onCardClick, link, name, likes, owner, _id, onCardLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    onCardClick({link, name});
  }  

  function handleLikeClick() { 
    onCardLike(likes, _id);
  }

  function handleDeleteClick() {
    onCardDelete(_id);
  }

  const isOwn = owner._id === currentUser._id;
  const isLiked = likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${isLiked && 'card__like-button_active'}`;

  return (
    <article className='card'>
      <img 
        src={link} 
        className='card__photo' 
        alt={name} 
        onClick={handleClick}
      />
      {isOwn && <button 
        className='card__delete-button' 
        aria-label='удалить' 
        type='button'
        onClick={handleDeleteClick} >
      </button>}
      <div className='card__align'>
        <h2 className='card__title'>{name}</h2>
        <div>
          <button 
            className={cardLikeButtonClassName}
            aria-label='нравится' 
            type='button'
            onClick={handleLikeClick} >
          </button>
          <p className='card__counter'>{likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;