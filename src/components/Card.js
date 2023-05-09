import React from 'react';


function Card({ item }) {

  React
    .useEffect(() => {
      console.log(item);
      return () => {

      };
    }, [item]);

  return (
    <>
      <article className="grid-places__cards cards"
        key={item._id}
      >
        <img
          alt="Место загруженное пользователем"
          className="cards__image"
          src={item.link} />
        <div className="cards__wrapper">
          <h2 className="cards__title">{item.name}</h2>
          <div className="cards__container-like">
            <button type="button" aria-label="Понравилось" className="cards__btn-like"></button>
            <p className="cards__counter-like">{item.likes.length}</p>
          </div>
        </div>
        <button className="cards__trash links"></button>
      </article>
    </>
  );
}

export default Card;
