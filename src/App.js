import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import League from "./Components/Leagues/Leagues";
import Navigation from "./Components/Navigation/Navigation";
import OnePlayerInfo from "./Components/Player/OnePlayerInfo";
import OneTeamInfo from "./Components/Teams/OneTeamInfo";
import Search from "./Components/Navigation/SearchResults";
import OneLeagueInfo from "./Components/Leagues/OneLeagueInfo";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <div>
            <Route path="/" component={League} exact />
            <Route path="/Leagues" component={League} />       
            <Route path="/OnePlayerInfo/:id" component={OnePlayerInfo} exact />       
            <Route path="/OneTeamInfo/:id" component={OneTeamInfo} />
            <Route path="/OneLeagueInfo/:id" component={OneLeagueInfo} /> 
            <Route path="/SearchResults" component={Search} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
