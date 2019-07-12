import React from "react";
import axios from "axios";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";


class League extends React.Component {
    state = {
        list_of_leagues: [],
        list_of_detail_leagues: [],
        id_league: 0
      };
    
      componentDidMount() {
        axios
          .get(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
          .then(res => {
            console.log("ovo:", res);
            this.setState({ list_of_leagues: res.data.leagues });
          })
          .catch(err => console.log(err));
    
        axios
          .get(
            `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=` +
              this.state.id_league
          )
          .then(res => {
            console.log("ovo:", res);
            this.setState({ list_of_detail_leagues: res.data.leagues });
          })
          .catch(err => console.log(err));
      }
    
      //=================================================================================
      filterLeaguesList = list => {
        const filterLeague = list.filter(league => league.strSport == "Soccer");
    
        return filterLeague.map(league => (
          <li key={league.idLeague}>{league.strLeague}</li>
        ));
      };
      //=================================================================================
      listOfLeagueId = list => {
        const filterLeague = list.filter(league => league.strSport == "Soccer");
    
        return (
          <select value={this.state.id_league} onChange={this.onDropdownSelected}>
            <option value="" />
            {filterLeague.map((id, i) => (
              <option key={i} value={id.idLeague}>
                {id.strLeague}
              </option>
            ))}
          </select>
        );
      };
    
      //=================================================================================
      onDropdownSelected = e => {
        console.log("THE VAL", e.target.value);
        this.setState({
          id_league: e.target.value
        });
        console.log("id_league: ", this.state.id_league); //this variable is late by one choose
      };
      //=================================================================================
      render() {
        const { list_of_leagues, list_of_detail_leagues, id_league } = this.state;
    
        return (
          <div>
            {/* <BrowserRouter>
              <div>
                <Link to="/Leagues">Leagues</Link>
                <Route exact path="/Leagues" component={League}  />
              </div>
            </BrowserRouter> */}
            <div>{this.filterLeaguesList(list_of_leagues)}</div>
    
            {/* <div>{this.listOfLeagueId(list_of_leagues)}</div> */}
          </div>
        );
      }
}

export default League;