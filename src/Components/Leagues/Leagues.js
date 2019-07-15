import React from "react";
import axios from "axios";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import League from "./League";
import "./League.css";

class Leagues extends React.Component {
  state = {
    listOfLeagues: [],
    listOfDetailLeagues: [],
    idLeague: 0
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    axios
      .get("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
      .then(res => {
        this.setState({ listOfLeagues: res.data.leagues });
      })
      .catch(err => console.log(err));

    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id= ${
          params.id
        }`
      )
      .then(res => {
        this.setState({ listOfDetailLeagues: res.data.leagues });
      })
      .catch(err => console.log(err));
  }

  soccerLeagues = list => {
    const filterLeague = list.filter(league => league.strSport === "Soccer").filter(league => league.idLeague !== "4367").filter(league => league.idLeague !== "4519");
    // 4367 and 4519 are ID-s from some undefined teams

    return filterLeague.map(league => <League league={league} />);
  };

  render() {
    const { listOfLeagues } = this.state;

    return <ul className="league-list">{this.soccerLeagues(listOfLeagues)}</ul>;
  }
}

export default Leagues;
