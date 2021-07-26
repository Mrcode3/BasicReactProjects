import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const handlePreBtn = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const handleNextBtn = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleRamdonBtn = () => {
    setIndex(Math.floor(Math.random() * people.length - 1) + 1);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePreBtn}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNextBtn}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRamdonBtn}>
        Random
      </button>
    </article>
  );
};

export default Review;
