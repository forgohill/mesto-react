import React from 'react';

import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
// import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';
import EditProfilePopup from './EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup/EditAvatarPopup.jsx';
import AddPlacePopup from './AddPlacePopup/AddPlacePopup.jsx';

function App() {
  // стейты для попапов
  const [isOpenedPopupChangeAvatar, setIsOpenedPopupChangeAvatar] = React.useState(false);
  const [isOpenedPopupEditProfile, setIsOpenedPopupEditProfile] = React.useState(false);
  const [isOpenedPopupAddCard, setIsOpenedPopupAddCard] = React.useState(false);

  // стетейт массив карточек
  const [cards, setCards] = React.useState([]);

  // стейт Context
  const [currentUser, setCurrentUser] = React.useState({});

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

  // ставим/удаляем Like
  const handleCardLike = (card) => {
    const isLiked = card.likes
      .some((item) => {
        return item._id === currentUser._id;
      });

    // API проверка на true/false и отправка лайка либо снятие
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards(
          (state) => state.map(
            (item) => {
              return (item._id === card._id
                ? newCard
                : item)
            }));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // удаляем карточку
  const handleCardDelete = (card) => {
    // API удаляем  карточку где нажали ведро
    api.deleteCard(card._id)
      .catch((err) => {
        console.error(err);

      });

    // обновляем стейт cards
    setCards(
      cards
        .filter((item) => {
          return item !== card;
        })
    )

  }

  // изменяем данные юзера
  const handleUpdateUser = ({ inputName, inputMission }) => {
    // console.log({ inputName, inputMission });

    // API отправляем данные для изменения имени и описания
    api.patchUserInfo({ inputName, inputMission })
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // обновляем Аватар
  const handleUpdateAvatar = ({ avatarLink }) => {
    console.log({ avatarLink });

    // API отправляем данные для изменения Ававтара
    api.patchAvatar({ avatarLink })
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }


  // { name: data.inputFoto, link: data.inputLink }
  const handleUpdateCards = (data) => {
    console.log(data);

    api.setCard(data)
      .then((data) => {
        setCards([data, ...cards]);
        console.log(cards);
        console.log(data);

        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
        console.error(err);
      });
  }

  // первая инициализация данных с сервера
  React.useEffect(() => {

    // API получения и запись стейта текущийЮзер
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      });

    // API инициалищируем карточки
    api.getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error(err);
      })


  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>

        <Header />
        <Main
          onChangeAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddCard={handleAddCardClick}
          onSelectedCard={handleCardImageClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />

        {/* ПРЕВЬЮХА */}
        <ImagePopup
          card={selectedCard}
          closePopup={closeAllPopups}
        ></ImagePopup>

        {/* РЕДАКТИРОВАТЬ */}
        <EditProfilePopup
          openPopup={isOpenedPopupEditProfile}
          closePopup={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        >
        </EditProfilePopup>



        {/* ИЗМЕНИТЬ АВАТАР */}

        <EditAvatarPopup
          openPopup={isOpenedPopupChangeAvatar}
          closePopup={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        ></EditAvatarPopup >


        {/* ДОБАВИТЬ КАРТОЧКУ */}

        <AddPlacePopup
          openPopup={isOpenedPopupAddCard}
          closePopup={closeAllPopups}
          onUpdateCards={handleUpdateCards}
        >
        </AddPlacePopup >



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
      </CurrentUserContext.Provider>

    </div >
  );
}

export default App;

