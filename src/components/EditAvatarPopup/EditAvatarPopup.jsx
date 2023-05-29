import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm'


function EditAvatarPopup({ openPopup, closePopup, onUpdateAvatar, onDisabled }) {

  const inputAvatarRef = React.useRef(null);

  const handleSubmit = (e) => {

    e.preventDefault();

    onUpdateAvatar(
      {
        avatarLink: inputAvatarRef.current.value
      }
    )
  }

  React.useEffect(() => {
    inputAvatarRef.current.value = '';
  }, [openPopup]);

  return (
    <PopupWithForm
      name={"avatar"}
      title={"Обновить аватар"}
      openPopup={openPopup}
      closePopup={closePopup}
      buttonText={'Сохранить'}
      disabled={onDisabled}
      onSubmit={handleSubmit}
    >
      <input
        id="link-avatar"
        type="url"
        name="avatarLink"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_link" required
        ref={inputAvatarRef}
      />
      <span className="popup__error popup__error_link-avatar">
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
