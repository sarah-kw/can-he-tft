import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const getStats = () => {
//   axios
//     .get("http://127.0.0.1:5000/aaron")
//     .then((response) => {
//       console.log(response.data);
//       const gameCounter = document.getElementById("gameCounter");
//       const games = response.data;
//       console.log(games.length);
//       gameCounter.textContent = `${games.length}`;
//     })
//     .catch((response) => {
//       console.log("an error occurred");
//     });
// };

// const getMatches = () => {
//   axios
//     .get("http://127.0.0.1:5000/aaron/recent-matches")
//     .then((response) => {});
// };

// document.addEventListener("DOMContentLoaded", getStats);
