import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import SearchParams from "./components/SearchParams";
import Details from "./pages/Details";
import ThemeContext from "./components/ThemeContext";

const App = () => {
  const themeHook = useState("peru");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me</Link>
          </header>

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
