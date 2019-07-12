import React from "react";
import axios from "axios";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";


class League extends React.Component {
    state = {
        listOfLeagues: [],
        listOfDetailLeagues: [],
        idLeague: 0
      };
    
      componentDidMount() {
        axios
          .get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
          .then(res => {
            console.log("this:", res);
            this.setState({ listOfLeagues: res.data.leagues });
          })
          .catch(err => console.log(err));
    
        axios
          .get(
            `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id= ${this.state.idLeague}`            
          )
          .then(res => {
            console.log("this:", res);
            this.setState({ listOfDetailLeagues: res.data.leagues });
          })
          .catch(err => console.log(err));
      }
    
      
      soccerLeagues = list => {
        const filterLeague = list.filter(league => league.strSport === "Soccer");
    
        return filterLeague.map(league => (
          <li key={league.idLeague}>{league.strLeague}</li>
        ));
      };
      
      leaguesIds = list => {
        const filterLeague = list.filter(league => league.strSport === "Soccer");
    
        return (
          <select value={this.state.idLeague} onChange={this.onDropdownSelected}>
            <option value="" />
            {filterLeague.map((id, i) => (
              <option key={i} value={id.idLeague}>
                {id.strLeague}
              </option>
            ))}
          </select>
        );
      };
    
      
      onDropdownSelected = e => {
        this.setState({
          idLeague: e.target.value
        });
        console.log("idLeague: ", this.state.idLeague); //this variable is late by one choose
      };
      
      render() {
        const { listOfLeagues, listOfDetailLeagues, idLeague } = this.state;
    
        return (
          <div>
            
            <div>{this.soccerLeagues(listOfLeagues)}</div>
    
           
          </div>
        );
      }
}

export default League;