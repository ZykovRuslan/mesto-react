import React from 'react';

function Card({onCardClick, link, name, likes}) {

  function handleClick() {
    onCardClick({link, name});
  }  

  return (
    <article className='card'>
      <img 
        src={link} 
        className='card__photo' 
        alt={name} 
        onClick={handleClick}
      />
      <button 
        className='card__delete-button' 
        aria-label='удалить' 
        type='button'>
      </button>
      <div className='card__align'>
        <h2 className='card__title'>{name}</h2>
        <div>
          <button 
            className='card__like-button' 
            aria-label='нравится' 
            type='button'>
          </button>
          <p className='card__counter'>{likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
