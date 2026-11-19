import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather
          defaultCity="Brussels
        "
        />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/Lfaliji"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chadia Lfaliji
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/Lfaliji/weather-app-react-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://weather-app-react-vite-project.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Netlify
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
