import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function EditProfilePopup({ openPopup, closePopup, onUpdateUser, onDisabled }) {

  const currentUser = React.useContext(CurrentUserContext);


  React.useEffect(() => {
    setInputName(currentUser.name);
    setInputMission(currentUser.about);
  }, [currentUser, openPopup]);

  const [inputName, setInputName] = React.useState('');
  const [inputMission, setInputMission] = React.useState('');


  const handleInputNameChange = (e) => {
    setInputName(e.target.value);
  }

  const handleInputMissionChange = (e) => {
    setInputMission(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser(
      {
        inputName,
        inputMission,
      }
    )
  }

  // React
  //   .useEffect(() => {
  //     // console.log(currentUser);
  //     setInputName(currentUser.name);
  //     setInputMission(currentUser.about);
  //   }, [openPopup]);

  return (
    <PopupWithForm
      name={"edit"}
      title={"Редактировать профиль"}
      openPopup={openPopup}
      closePopup={closePopup}
      buttonText={'Сохранить'}
      onSubmit={handleSubmit}
      disabled={onDisabled}
    >

      <input
        value={inputName || ''}
        id="name"
        type="text"
        minLength="2"
        maxLength="40"
        name="inputName"
        placeholder="Имя"
        className="popup__input popup__input_name" required
        onChange={handleInputNameChange}
      />
      <span className="popup__error popup__error_name">
      </span>
      <input
        value={inputMission || ''}
        id="mission"
        type="text"
        minLength="2"
        maxLength="200"
        name="inputMission"
        placeholder="О себе"
        className="popup__input popup__input_mission" required
        onChange={handleInputMissionChange}
      />
      <span className="popup__error popup__error_mission">
      </span>
    </PopupWithForm >
  );
}

export default EditProfilePopup;
