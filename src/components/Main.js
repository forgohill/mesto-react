import React from 'react';

import {
  header__logo,
  profile__avatar,
} from '../utils/images.js'

function Main() {
  return (

    <main className="main">

      <section className="profile">
        <div className="profile__container">
          <div className="profile__wrapper-avatar">

            <img
              src={profile__avatar}
              alt="Жак-Ив-Кусто. Фотография. Пртрет."
              className="profile__avatar" />
            <button
              type="button"
              className="profile__avatar-button links"></button>
          </div>
          <div className="profile__wrapper">
            <h1 className="profile__name">forgohill</h1>
            <p className="profile__mission">quick.action.lab</p>
            <button
              type="button"
              name="button-edit"
              aria-label="Редактировать профиль"
              className="profile__btn-edit links"></button>
          </div>
        </div>
        <button
          type="button"
          name="button-add"
          aria-label="Добавить картинку"
          className="profile__btn-add links"></button>
      </section>

      <section className="grid-places">
        <p className="footer__paragraph">КАРТОЧКИ</p>
      </section>
    </main >
  );
}

export default Main;
