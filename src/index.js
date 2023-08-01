import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
 function Friend({ setTips, friendTip }) {
  return (
    <>
      <p>How did your friend like the services?</p>
      <select value={friendTip} onChange={(e) => setTips(e.target.value)}>
        <option value="disSatisfied">Dissatisfied(0%)</option>
        <option value="ok">It was ok(5%)</option>
        <option value="good">It was good(10%)</option>
        <option value="amazing">It was amazing(20%)</option>
      </select>
    </>
  );
  } */
