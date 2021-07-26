import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestion] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question {...question} key={question.id} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
