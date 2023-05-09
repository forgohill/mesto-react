import React from 'react';

import {
  headerLogo,
  // profileAvatar,
} from '../utils/images.js'


function Header() {
  return (

    <header className="header">
      <a href="#"
        className="header__link links"
        title="Переход на главную - проект: место.">
        <img
          src={headerLogo}
          alt="Логотип проекта Место"
          className="header__logo" />
      </a>
    </header>

  );
}

export default Header;
