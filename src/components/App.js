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

  // стейт карточки
  const [selectedCard, setSelectedCard] = React.useState(null);

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

  const handleCardImageClick = (item) => {
    setSelectedCard(item);
  }

  const closeAllPopups = () => {
    setIsOpenedPopupChangeAvatar(false);
    setIsOpenedPopupEditProfile(false);
    setIsOpenedPopupAddCard(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onChangeAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddCardClick}
        onSelectedCard={handleCardImageClick}
      />
      <Footer />

      {/* ПРЕВЬЮХА */}
      <ImagePopup
        card={selectedCard}
        closePopup={closeAllPopups}

      ></ImagePopup>

      {/* РЕДАКТИРОВАТЬ */}
      <PopupWithForm
        name={"edit"}
        title={"Редактировать профиль"}
        openPopup={isOpenedPopupEditProfile}
        closePopup={closeAllPopups}
        buttonText={'Сохранить'}
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
        buttonText={'Сохранить'}
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
        buttonText={'Создать'}
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

    </div >
  );
}

export default App;

