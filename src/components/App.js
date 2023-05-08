import React from 'react';

import Header from './Header';

import Main from './Main.js'
import Footer from './Footer.js';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <template id="template">
        <article className="grid-places__cards cards">
          <img alt="Место загруженное пользователем" className="cards__image" />
          <div className="cards__wrapper">
            <h2 className="cards__title"></h2>
            <div className="cards__container-like">
              <button type="button" aria-label="Понравилось" className="cards__btn-like"></button>
              <p className="cards__counter-like">0</p>
            </div>
          </div>
          <button className="cards__trash links"></button>
        </article>
      </template>


    </div >
  );
}

export default App;
