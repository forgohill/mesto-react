import React from 'react';

import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ImagePopup from './ImagePopup/ImagePopup';
import EditProfilePopup from './EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup/EditAvatarPopup.jsx';
import AddPlacePopup from './AddPlacePopup/AddPlacePopup.jsx';

import DeletePlacePopup from './DeletePlacePopup/DeletePlacePopup.jsx';

function App() {
  // стейты для попапов
  const [isOpenedPopupChangeAvatar, setIsOpenedPopupChangeAvatar] = React.useState(false);
  const [isOpenedPopupEditProfile, setIsOpenedPopupEditProfile] = React.useState(false);
  const [isOpenedPopupAddCard, setIsOpenedPopupAddCard] = React.useState(false);
  const [isOpenedPopupConfirmDeleteCard, setIsOpenedPopupConfirmDeleteCard] = React.useState(false);

  // стетейт массив карточек
  const [cards, setCards] = React.useState([]);

  // стейт Context
  const [currentUser, setCurrentUser] = React.useState({});

  // стейт карточки
  const [selectedCard, setSelectedCard] = React.useState(null);

  // стейт для хранения карточки для удаления
  const [selectedConfirmDeleteCard, setSelectedConfirmDeleteCard] = React.useState(null);

  // стейт enable/disable
  const [isDisabled, setIsDisabled] = React.useState(false);

  // блок обработчиков кнопок
  const handleEditAvatarClick = () => {
    setIsOpenedPopupChangeAvatar(true);
  }

  const handleEditProfileClick = () => {
    setIsDisabled(false);
    setIsOpenedPopupEditProfile(true);
  }

  const handleAddCardClick = () => {
    setIsDisabled(false);
    setIsOpenedPopupAddCard(true);

  }

  // нажатие ДА в попап удалить Карточку
  const handleConfirmDeleteCardClick = () => {

    // API удаляем  карточку где нажали ведро
    api.deleteCard(selectedConfirmDeleteCard._id)
      .catch((err) => {
        console.error(err);
      });

    // обновляем стейт cards
    setCards(
      cards
        .filter((item) => {
          return item !== selectedConfirmDeleteCard;
        })
    );

    closeAllPopups();
  }

  const handleCardImageClick = (item) => {
    setSelectedCard(item);
  }

  const closeAllPopups = () => {
    setIsOpenedPopupChangeAvatar(false);
    setIsOpenedPopupEditProfile(false);
    setIsOpenedPopupAddCard(false);
    setIsOpenedPopupConfirmDeleteCard(false);
    setSelectedCard(null);
    setSelectedConfirmDeleteCard(null);
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
    setSelectedConfirmDeleteCard(card);
    setIsOpenedPopupConfirmDeleteCard(true);
  }

  // изменяем данные юзера
  const handleUpdateUser = ({ inputName, inputMission }) => {
    setIsDisabled(true);
    // API отправляем данные для изменения имени и описания
    api.patchUserInfo({ inputName, inputMission })
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
        setIsDisabled(false);
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

  const handleUpdateCards = (data) => {
    setIsDisabled(true);
    api.setCard(data)
      .then((data) => {
        setCards([data, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
        setIsDisabled(false);
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
          onDisabled={isDisabled}
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
          onDisabled={isDisabled}
        >
        </AddPlacePopup >

        {/* УДАЛИТЬ КАРТОЧКУ */}
        <DeletePlacePopup
          openPopup={isOpenedPopupConfirmDeleteCard}
          closePopup={closeAllPopups}
          onConfirmDeleteCard={handleConfirmDeleteCardClick}
        >
        </DeletePlacePopup>


      </CurrentUserContext.Provider>

    </div >
  );
}

export default App;


