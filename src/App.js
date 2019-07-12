import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import Country from "./Components/Countries/Countries";
import League from "./Components/Leagues/Leagues";
import Navigation from "./Components/Navigation/Navigation";
import Player from "./Components/Player/Player";
import SportEvent from "./Components/SportEvent/SportEvent";
import Schedule from "./Components/Schedule/Schedule";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <div>
            {/* <ul>
              <li>APP.js</li>
              <li>
                <Link to="/Countries">Countries</Link>
              </li>
              <li>
                <Link to="/Leagues">Leagues</Link>
              </li>
            </ul> */}

            <Route path="/Countries" component={Country} exact />
            <Route path="/Leagues" component={League} exact />
            <Route path="/Player" component={Player} exact />
            <Route path="/SportEvent" component={SportEvent} exact />
            <Route path="/Schedule" component={Schedule} exact />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
