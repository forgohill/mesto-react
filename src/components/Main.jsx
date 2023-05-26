import React from 'react';

import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Card from './Card'

function Main({ onChangeAvatar, onEditProfile, onAddCard, onSelectedCard }) {

  // блок стейтов
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  // user Context
  const currentUser = React.useContext(CurrentUserContext);

  console.log(currentUser);

  React.useEffect(() => {

    // API юзерИнфо
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar)
      }).catch((err) => {
        console.error(err);
      })

    // API инициализация карточек
    api.getCards()
      .then((data) => {
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
      (<Card
        key={item._id}
        onSelectedCard={onSelectedCard}
        item={item}
      />)
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
