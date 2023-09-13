import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((res) => setData(res.message));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;