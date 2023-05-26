import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ item, onSelectedCard }) {
  const currentUser = React.useContext(CurrentUserContext);

  console.log(currentUser);

  const handleCardImageClick = () => {
    onSelectedCard(item);
  }

  console.log(item)
  const isOwn = item.owner._id === currentUser._id;
  const isLiked = item.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `cards__btn-like ${isLiked && 'cards__btn-like_active'}`
  );;

  console.log(isOwn);
  console.log(isLiked);

  return (

    <article className="grid-places__cards cards"
    >
      <img
        alt={item.name}
        className="cards__image"
        src={item.link}
        onClick={handleCardImageClick}
      />
      <div className="cards__wrapper">
        <h2 className="cards__title">{item.name}</h2>
        <div className="cards__container-like">

          <button type="button" aria-label="Понравилось" className={cardLikeButtonClassName}></button>
          <p className="cards__counter-like">{item.likes.length}</p>
        </div>
      </div>
      {isOwn && <button className="cards__trash links"></button>};
      {/* <button className="cards__trash links"></button> */}
    </article>

  );
}

export default Card;
