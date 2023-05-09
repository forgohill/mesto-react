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


  React.useEffect(() => {
    // console.log(userName);

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
        <p className="footer__paragraph">КАРТОЧКИ</p>
      </section>


    </main >
  );
}

export default Main;
