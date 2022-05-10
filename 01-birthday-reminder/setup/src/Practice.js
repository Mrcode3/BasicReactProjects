import React, { useState } from "react";
import data from "./data";

const Practice = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday(s) today</h3>
        {people.map((person) => {
          const { id, name, age, image } = person;

          return (
            <article key={id} className="person">
              <img src={image} alt={image} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}

        <button onClick={() => setPeople([])}>clear</button>
      </section>
    </main>
  );
};

export default Practice;
