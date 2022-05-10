import React, { useState } from "react";
//id, image, price, info, name,
const Tour = ({ removeTour, ...tour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        <p>
          {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "show more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(tour.id)}>
          Not Intersted
        </button>
      </footer>
    </article>
  );
};

export default Tour;
