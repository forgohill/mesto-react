import React from 'react';

function PopupWithForm({ name, title, openPopup, closePopup, ...props }) {

  console.log(name);
  console.log(title);
  console.log(openPopup);
  console.log(closePopup);

  console.log(props.children);

  return (

    <div className={`popup popup_${name} ${openPopup && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form popup__form_edit"
          name="popupForm"
          method="post"
          noValidate>
          <>
            {props.children}
          </>
          <button
            type="submit"
            aria-label="Сохранить изменения в профиле"
            className="popup__submit">Сохранить</button>

        </form>

        <button
          type="button"
          name="button-close"
          aria-label="Закрыть окно"
          className="popup__close popup__close_edit links"
          onClick={closePopup}>
        </button>

      </div>
    </div>

  );
}

export default PopupWithForm;
