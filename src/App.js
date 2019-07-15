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
import PlayersInfo from "./Components/Player/PlayersInfo";
import OnePlayerInfo from "./Components/Player/OnePlayerInfo";
import TeamsInfo from "./Components/Teams/TeamsInfo";
import OneTeamInfo from "./Components/Teams/OneTeamInfo";
import Leagues from "./Components/Leagues/Leagues";

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <div>

            <Route path="/" component={League} exact /> 
            <Route path="/Countries" component={Country} exact />
            <Route path="/Leagues" component={League} exact />
            <Route path="/Player" component={Player} exact />
            <Route path="/SportEvent" component={SportEvent} exact />
            <Route path="/Schedule" component={Schedule} exact />
            <Route path="/PlayersInfo" component={PlayersInfo} exact {...props}/>
            <Route path="/OnePlayerInfo" component={OnePlayerInfo} exact />
            <Route path="/TeamsInfo/:id" component={TeamsInfo} exact />

            <Route path="/OnePlayerInfo/:id" component={OnePlayerInfo} exact />              
            <Route path="/TeamInfo/:id" component={OneTeamInfo}/>
            <Route path="/PlayersInfo/:id" component={PlayersInfo}/>


            
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
