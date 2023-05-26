import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function EditProfilePopup({ openPopup, closePopup, onUpdateUser }) {

  const currentUser = React.useContext(CurrentUserContext);


  React.useEffect(() => {
    setInputName(currentUser.name);
    setInputMission(currentUser.about);
  }, [currentUser]);


  const [inputName, setInputName] = React.useState('');
  const [inputMission, setInputMission] = React.useState('');


  const handleInputNameChange = (e) => {
    setInputName(e.target.value);
    // console.log(name);
  }

  const handleInputMissionChange = (e) => {
    setInputMission(e.target.value);
    // console.log(description);
  }

  const handleSubmit = (e) => {
    // debugger;
    e.preventDefault();

    onUpdateUser({
      inputName,
      inputMission,
    })
  }

  return (
    <PopupWithForm
      name={"edit"}
      title={"Редактировать профиль"}
      openPopup={openPopup}
      closePopup={closePopup}
      buttonText={'Сохранить'}

      onSubmit={handleSubmit}
    >

      <input
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
