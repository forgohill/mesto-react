import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function AddPlacePopup({ openPopup, closePopup, onUpdateCards }) {

  const [inputFhoto, setInputFhoto] = React.useState('');
  const [inputLink, setInputLink] = React.useState('');

  const handleInputFhotoChange = (e) => {
    setInputFhoto(e.target.value);
  }

  const handleInputLinkChange = (e) => {
    setInputLink(e.target.value);
  }

  const handleAddPlaceSubmit = (e) => {
    e.preventDefault();

    onUpdateCards({
      name: inputFhoto,
      link: inputLink
    });
  }

  return (

    <PopupWithForm
      name={"add"}
      title={"Новое место"}
      openPopup={openPopup}
      closePopup={closePopup}
      buttonText={'Создать'}
      onSubmit={handleAddPlaceSubmit}

    >
      <input
        id="foto"
        type="text"
        minLength="2"
        maxLength="30"
        name="inputFoto"
        placeholder="Название"
        className="popup__input popup__input_foto" required
        onChange={handleInputFhotoChange}
      />
      <span className="popup__error popup__error_foto">
      </span>
      <input
        id="link"
        type="url"
        name="inputLink"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_link" required
        onChange={handleInputLinkChange}
      />
      <span className="popup__error popup__error_link">
      </span>
    </PopupWithForm>


  );
}

export default AddPlacePopup;
