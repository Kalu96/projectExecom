import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Country from "./Components/Countries/Countries";
import League from "./Components/Leagues/Leagues";
import Navigation from "./Components/Navigation/Navigation";
import Player from "./Components/Player/Player";
import SportEvent from "./Components/SportEvent/SportEvent";
import Schedule from "./Components/Schedule/Schedule";
import PlayersInfo from "./Components/Player/PlayersInfo";
import OnePlayerInfo from "./Components/Player/OnePlayerInfo";
import TeamsInfo from "./Components/Teams/TeamsInfo";
import OneTeamInfo from "./Components/Teams/OneTeamInfo";
import Search from "./Components/Navigation/SearchResults";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <div>
            <Route path="/" component={League} exact />
            <Route path="/Countries" component={Country} />
            <Route path="/Leagues" component={League} />
            <Route path="/Player" component={Player} />
            <Route path="/SportEvent" component={SportEvent} />
            <Route path="/Schedule" component={Schedule} />
            <Route path="/PlayersInfo" component={PlayersInfo} exact />
            <Route path="/OnePlayerInfo" component={OnePlayerInfo} exact />

            <Route path="/TeamsInfo/:id" component={TeamsInfo} exact />
            <Route path="/OnePlayerInfo/:id" component={OnePlayerInfo} exact />
            <Route path="/TeamInfo/:id" component={OneTeamInfo} />
            <Route path="/OneTeamInfo/:id" component={OneTeamInfo} />
            <Route path="/SearchResults" component={Search} />

          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
