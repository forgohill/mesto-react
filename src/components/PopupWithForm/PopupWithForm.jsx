import React from 'react';

function PopupWithForm({ name, title, openPopup, closePopup, buttonText, onSubmit, ...props }) {


  // console.log(onSubmit);


  return (

    <div className={`popup popup_${name} ${openPopup && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form popup__form_edit"
          name={`popup${name}`}
          method="post" noValidate

          onSubmit={onSubmit}
        >


          {props.children}

          <button
            type="submit"
            aria-label="Сохранить изменения в профиле"
            className="popup__submit">{buttonText || 'Сохранить'}</button>

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
