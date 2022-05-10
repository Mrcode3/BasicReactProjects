import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState(10);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(amount);
      console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setAmount(parseInt(e.target.value));
    console.log(e.target.value);
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            color={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={error ? "error" : null}
          />
          <button type="submit" className="btn">
            Go
          </button>
          <div>
            <label htmlFor="divider">divide(1-100)</label>
            <input
              type="number"
              placeholder="10"
              value={amount}
              min="1"
              max="100"
              onChange={handleChange}
            />
            <button type="button" onClick={handleSubmit}>
              Divide It
            </button>
          </div>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
