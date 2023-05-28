import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function AddPlacePopup({ openPopup, closePopup, onUpdateCards }) {

  const [inputFhoto, setInputFhoto] = React.useState('');
  const [inputLink, setInputLink] = React.useState('');

  // console.log(onUpdateCards);


  // { name: data.inputFoto, link: data.inputLink }
  const handleInputFhotoChange = (e) => {
    // console.log(e.target.value);
    setInputFhoto(e.target.value);
    console.log(inputFhoto);
  }

  const handleInputLinkChange = (e) => {
    // console.log(e.target.value);
    setInputLink(e.target.value);
    console.log(inputLink);
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
