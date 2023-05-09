import React from 'react';

import {
  headerLogo,
  // profileAvatar,
} from '../utils/images.js'


function ImagePopup() {
  return (
    <>
      <div className="popup popup_preview popup_opened">
        <figure className="popup__figure">
          <img
            // src={profileAvatar}
            alt="Место"
            className="popup__image" />
          <figcaption
            className="popup__figcaption">Пицунда</figcaption>
          <button
            type="button"
            name="button-close"
            aria-label="Закрыть окно"
            className="popup__close popup__close_edit links"></button>
        </figure>
      </div>
    </>

  );
}

export default ImagePopup;
