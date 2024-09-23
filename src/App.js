import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputEn from "./components/InputEn";

function App() {
  var curr = new Date();
  var fl =
    "Last login: " +
    curr.toLocaleDateString() +
    " " +
    curr.toLocaleTimeString() +
    " on ttys000";
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="terminal">
          {fl}
          <br />
          <br />
          Hello!
          <br />
          Welcome to my website!
          <br />
          Here you can find information regarding my previous projects or about
          me.
          <br />
          To start type -h or -help to view potential commands
          <br />
          <br />
          <InputEn />
        </div>
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
