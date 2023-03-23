import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          Open-source code by{" "}
          <a
            href="https://www.linkedin.com/in/mirna-fakin/"
            target="_blank"
            rel="noreferrer"
          >
            Fakin Mirna{" "}
          </a>{" "}
          on{" "}
          <a
            href="https://github.com/fakin-mirna/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
