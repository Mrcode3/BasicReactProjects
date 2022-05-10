import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [paragraph, setParagraph] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count >= data.length - 1) {
      amount = data.length - 1;
    }
    setParagraph(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h1>lorem ipsum Generator</h1>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraph:</label>
        <input
          min="1"
          max={data.length - 1}
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {paragraph.map((p, index) => {
          return <p key={index}>{p}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
