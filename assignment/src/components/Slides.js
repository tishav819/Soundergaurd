import React, { useState } from "react";

function Slides({ slides }) {
  const [count, setCount] = useState(0);
  return (
    <div className=" boxdiv">
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="buttonall"
          onClick={() => setCount(0)}
          disabled={count === 0 ? true : false}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="buttonall"
          onClick={() => setCount(count - 1)}
          disabled={count === 0 ? true : false}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="buttonall"
          onClick={() => setCount(count + 1)}
          disabled={count === slides.length - 1 ? true : false}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[count].title}</h1>
        <p data-testid="text">{slides[count].text}</p>
      </div>
    </div>
  );
}

export default Slides;
