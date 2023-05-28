import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm'


function EditAvatarPopup({ openPopup, closePopup, onUpdateAvatar }) {

  const inputAvatarRef = React.useRef(null);
  // console.log(inputAvatarRef.value);


  const handleSubmit = (e) => {
    // debugger;
    e.preventDefault();

    onUpdateAvatar(
      {
        avatarLink: inputAvatarRef.current.value
      }
    )
  }

  return (
    <PopupWithForm
      name={"avatar"}
      title={"Обновить аватар"}
      openPopup={openPopup}
      closePopup={closePopup}
      buttonText={'Сохранить'}

      onSubmit={handleSubmit}
    >
      <input
        id="link-avatar"
        type="url"
        name="avatarLink"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_link" required
        // onChange={handlerAvatarLink}
        ref={inputAvatarRef}
      />
      <span className="popup__error popup__error_link-avatar">
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
