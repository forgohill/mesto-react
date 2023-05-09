import React from 'react';

import api from '../utils/api'

import {
  headerLogo,
  // profileAvatar,
} from '../utils/images.js'

function Main({ onChangeAvatar, onEditProfile, onAddCard }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    console.log(cards);

    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar)
      }).catch((err) => {
        console.error(err);
      })

    return () => {
    };
  }, []);



  React.useEffect(() => {
    console.log(cards);
    api.getCards()
      .then((data) => {
        console.log(data);
        setCards(data);
      })
      .catch((err) => {
        console.error(err);
      })

    return () => {
    };
  }, []);



  const cardList = cards.map((item) => {
    return (
      <article className="grid-places__cards cards"
        key={item._id}
      >
        <img
          alt="Место загруженное пользователем"
          className="cards__image"
          src={item.link} />
        <div className="cards__wrapper">
          <h2 className="cards__title">{item.name}</h2>
          <div className="cards__container-like">
            <button type="button" aria-label="Понравилось" className="cards__btn-like"></button>
            <p className="cards__counter-like">{item.likes.length}</p>
          </div>
        </div>
        <button className="cards__trash links"></button>
      </article>
    )
  });


  return (

    <main className="main">

      <section className="profile">
        <div className="profile__container">
          <div className="profile__wrapper-avatar">
            <div
              className="profile__avatar"
              style={{ backgroundImage: `url(${userAvatar})` }}
            ></div>
            {/* <img
              src={userAvatar}
              alt="Жак-Ив-Кусто. Фотография. Пртрет."
              className="profile__avatar" /> */}
            <button
              type="button"
              className="profile__avatar-button links"
              onClick={onChangeAvatar}
            ></button>
          </div>
          <div className="profile__wrapper">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__mission">{userDescription}</p>
            <button
              type="button"
              name="button-edit"
              aria-label="Редактировать профиль"
              className="profile__btn-edit links"
              onClick={onEditProfile}
            ></button>
          </div>
        </div>
        <button
          type="button"
          name="button-add"
          aria-label="Добавить картинку"
          className="profile__btn-add links"
          onClick={onAddCard}
        ></button>
      </section>

      <section className="grid-places">
        {cardList}
      </section>


    </main >
  );
}

export default Main;
