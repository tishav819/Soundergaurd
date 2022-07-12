import React from "react";
import "./App.css";
import Header from "./components/Header"


import Slides from "./components/Slides";

function App({ slides }) {
  return (
    <div className="mainhead">
      <Header  />
      <div className="App">
        <Slides slides={slides} />
      </div>
    </div>
  );
}

export default App;

