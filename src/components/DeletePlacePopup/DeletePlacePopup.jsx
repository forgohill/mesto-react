import React from 'react';

function DeletePlacePopup({ openPopup, closePopup, onConfirmDeleteCard }) {

  // console.log(onConfirmDeleteCard);
  const handleOverlayClick = (e) => {
    // e.stopPropagation();

    console.log(e.currentTarget);
    closePopup();
  }

  const handleButtonYesClick = (e) => {
    e.preventDefault();
    onConfirmDeleteCard()
  }


  return (
    <div className={`popup popup_trash ${openPopup ? "popup_opened" : ""}`}
      onClick={handleOverlayClick}>

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
            className="popup__submit"
            onClick={handleButtonYesClick}
          >
            Да
          </button>

        </form>
        <button
          type="button"
          name="button-close"
          aria-label="Закрыть окно"
          className="popup__close popup__close_delete links"
          onClick={closePopup}
        ></button>
      </div>
    </div>
  );
}

export default DeletePlacePopup;

