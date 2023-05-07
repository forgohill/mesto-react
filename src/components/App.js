import header__logo from '../images/header__logo.svg';
import profile__avatar from '../images/profile__avatar.jpg';

function App() {
  return (
    <div className="page">

      <header className="header">
        <a href="#"
          className="header__link links"
          title="Переход на главную - проект: место.">
          <img
            src={header__logo}
            alt="Логотип проекта Место"
            className="header__logo" />
        </a>
      </header>

      <main className="main">


        <section className="profile">
          <div className="profile__container">
            <div className="profile__wrapper-avatar">

              <img
                src={profile__avatar}
                alt="Жак-Ив-Кусто. Фотография. Пртрет."
                className="profile__avatar" />
              <button
                type="button"
                className="profile__avatar-button links"></button>
            </div>
            <div className="profile__wrapper">
              <h1 className="profile__name">forgohill</h1>
              <p className="profile__mission">quick.action.lab</p>
              <button
                type="button"
                name="button-edit"
                aria-label="Редактировать профиль"
                className="profile__btn-edit links"></button>
            </div>
          </div>
          <button
            type="button"
            name="button-add"
            aria-label="Добавить картинку"
            className="profile__btn-add links"></button>
        </section>

        <section className="grid-places">
          <p className="footer__paragraph">КАРТОЧКИ</p>
        </section>

        <footer className="footer">
          <p className="footer__paragraph">&#169; 2023 Mesto Russia</p>
        </footer>

        {/* popup_opened */}
        {/* ДОБАВИТЬ ПРЕВЬЮ */}
        <div className="popup popup_preview">
          <figure className="popup__figure">
            <img
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



        {/* РЕДАКТИРОВАТЬ */}
        <div className="popup popup_edit">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form popup__form_edit"
              name="popupForm"
              method="post"
              noValidate>
              <input
                id="name"
                type="text"
                minLength="2"
                maxLength="40"
                name="inputName"
                placeholder="Имя"
                className="popup__input popup__input_name" required />
              <span className="popup__error popup__error_name">
              </span>
              <input
                id="mission"
                type="text"
                minLength="2"
                maxLength="200"
                name="inputMission"
                placeholder="О себе"
                className="popup__input popup__input_mission"
                required />
              <span className="popup__error popup__error_mission">
              </span>
              <button
                type="submit"
                aria-label="Сохранить изменения в профиле"
                className="popup__submit">Сохранить</button>
            </form>
            <button
              type="button"
              name="button-close"
              aria-label="Закрыть окно"
              className="popup__close popup__close_edit links">
            </button>
          </div>
        </div>


        {/* ИЗМЕНИТЬ АВАТАР */}
        <div className="popup popup_avatar">
          <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form popup__form_avatar"
              name="popupForm"
              method="post"
              noValidate>
              <input
                id="link-avatar"
                type="url"
                name="avatarLink"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_link"
                required />
              <span className="popup__error popup__error_link-avatar">
              </span>
              <button type="submit"
                aria-label="Добавить карточку с картинкой"
                className="popup__submit">
                Сохранить
              </button>
            </form>
            <button
              type="button"
              name="button-close"
              aria-label="Закрыть окно"
              className="popup__close popup__close_add links">
            </button>
          </div>
        </div>


        {/* ДОБАВИТЬ КАРТОЧКУ */}
        <div className="popup popup_add">
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <form
              className="popup__form popup__form_add"
              name="popupForm"
              method="post"
              noValidate>
              <input
                id="foto"
                type="text"
                minLength="2"
                maxLength="30"
                name="inputFoto"
                placeholder="Название"
                className="popup__input popup__input_foto"
                required />
              <span className="popup__error popup__error_foto">
              </span>
              <input
                id="link"
                type="url"
                name="inputLink"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_link"
                required />
              <span className="popup__error popup__error_link">
              </span>
              <button
                type="submit"
                aria-label="Добавить карточку с картинкой"
                className="popup__submit">
                Создать
              </button>
            </form>
            <button
              type="button"
              name="button-close"
              aria-label="Закрыть окно"
              className="popup__close popup__close_add links"></button>
          </div>
        </div>

        {/* УДАЛИТЬ КАРТОЧКУ */}
        <div className="popup popup_trash">
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
                className="popup__submit">
                Да
              </button>

            </form>
            <button
              type="button"
              name="button-close"
              aria-label="Закрыть окно"
              className="popup__close popup__close_delete links"></button>
          </div>
        </div>


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


      </main >


    </div >
  );
}

export default App;
