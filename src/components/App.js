import React from 'react';

import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {

  // стейты для попапов
  const [isOpenedPopupChangeAvatar, setIsOpenedPopupChangeAvatar] = React.useState(false);
  const [isOpenedPopupEditProfile, setIsOpenedPopupEditProfile] = React.useState(false);
  const [isOpenedPopupAddCard, setIsOpenedPopupAddCard] = React.useState(false);




  // блок обработчиков кнопок
  const handleEditAvatarClick = () => {
    setIsOpenedPopupChangeAvatar(true);
  }

  const handleEditProfileClick = () => {
    setIsOpenedPopupEditProfile(true);
  }

  const handleAddCardClick = () => {
    setIsOpenedPopupAddCard(true);
  }

  const closeAllPopups = () => {
    setIsOpenedPopupChangeAvatar(false);
    setIsOpenedPopupEditProfile(false);
    setIsOpenedPopupAddCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onChangeAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddCardClick}
      />
      <Footer />

      {/* ДОБАВИТЬ ПРЕВЬЮ */}
      {/* <div className="popup popup_preview popup_opened"> */}
      {/* <div className="popup popup_preview">
        <figure className="popup__figure">
          <img
            alt="Место"
            className="popup__image" />
          <figcaption
            className="popup__figcaption">Пицунда</figcaption>
          <button
            type="button"
            name="button-close"
            aria-label="Закрыть окно"
            className="popup__close popup__close_edit links"></button>
        </figure>
      </div> */}
      {/* <ImagePopup></ImagePopup> */}



      {/* РЕДАКТИРОВАТЬ */}

      <PopupWithForm
        name={"edit"}
        title={"Редактировать профиль"}
        openPopup={isOpenedPopupEditProfile}
        closePopup={closeAllPopups}
      >

        <input
          id="name"
          type="text"
          minLength="2"
          maxLength="40"
          name="inputName"
          placeholder="Имя"
          className="popup__input popup__input_name" required />
        <span className="popup__error popup__error_name">
        </span>
        <input
          id="mission"
          type="text"
          minLength="2"
          maxLength="200"
          name="inputMission"
          placeholder="О себе"
          className="popup__input popup__input_mission"
          required />
        <span className="popup__error popup__error_mission">
        </span>

      </PopupWithForm >


      {/* ИЗМЕНИТЬ АВАТАР */}
      <PopupWithForm
        name={"avatar"}
        title={"Обновить аватар"}
        openPopup={isOpenedPopupChangeAvatar}
        closePopup={closeAllPopups}
      >
        <input
          id="link-avatar"
          type="url"
          name="avatarLink"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_link"
          required />
        <span className="popup__error popup__error_link-avatar">
        </span>
      </PopupWithForm>



      {/* ДОБАВИТЬ КАРТОЧКУ */}
      <PopupWithForm
        name={"add"}
        title={"Новое место"}
        openPopup={isOpenedPopupAddCard}
        closePopup={closeAllPopups}
      >
        <input
          id="foto"
          type="text"
          minLength="2"
          maxLength="30"
          name="inputFoto"
          placeholder="Название"
          className="popup__input popup__input_foto"
          required />
        <span className="popup__error popup__error_foto">
        </span>
        <input
          id="link"
          type="url"
          name="inputLink"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_link"
          required />
        <span className="popup__error popup__error_link">
        </span>
      </PopupWithForm>


      {/* УДАЛИТЬ КАРТОЧКУ */}
      {/* <div className="popup popup_trash popup_opened"> */}
      <div className="popup popup_trash">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>

          <form
            className="popup__form popup__form_trash"
            name="popupForm"
            method="post"
            noValidate>
            <button
              type="submit"
              aria-label="Удалить карарточку с картинкой"
              className="popup__submit">
              Да
            </button>

          </form>
          <button
            type="button"
            name="button-close"
            aria-label="Закрыть окно"
            className="popup__close popup__close_delete links"></button>
        </div>
      </div>
















      <template id="template">
        <article className="grid-places__cards cards">
          <img alt="Место загруженное пользователем" className="cards__image" />
          <div className="cards__wrapper">
            <h2 className="cards__title"></h2>
            <div className="cards__container-like">
              <button type="button" aria-label="Понравилось" className="cards__btn-like"></button>
              <p className="cards__counter-like">0</p>
            </div>
          </div>
          <button className="cards__trash links"></button>
        </article>
      </template>





    </div >
  );
}

export default App;
