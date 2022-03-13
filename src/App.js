import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          <a
            href="https://elated-spence-89c00b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Open sourced code
          </a>
          , by Andrea Sarmiento
        </footer>
      </div>
    </div>
  );
}
