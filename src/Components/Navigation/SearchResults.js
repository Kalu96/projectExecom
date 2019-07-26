import React from "react";
import axios from "axios";
import { axiosGet } from "./SearchHelper";
import Player from "../Player/Player";
import Team from "../Teams/Team";
import { withRouter } from "react-router";

class SearchResults extends React.Component {
  state = {
    searchTeamResults: null,
    searchPlayerResults: null,
    isLoaded: false,
    search: this.props.location.search
  };

  componentDidMount() {
    const name = this.state.search.slice(1).split("=")[1];
    const url = this.getUrlParams().toString();

    axios.all(axiosGet(name)).then(res => {
      const searchTeamResults = res[0].data.teams || null;
      const searchPlayerResults = res[1].data.player || null;

      this.setState({
        searchTeamResults,
        searchPlayerResults,
        isLoaded: true,
        search: url
      });
    });
  }

  componentDidUpdate() {
    const search = this.getUrlParams().toString();
    if (this.didQueryChange(search))
      this.setState({ search: search }, () => window.location.reload());
  }

  didQueryChange = search => {
    return this.state.search !== search;
  };

  getUrlParams = () => {
    if (!this.props.location.search) return new URLSearchParams();
    return new URLSearchParams(this.props.location.search);
  };

  printPlayers = list => {
    if (!list) return <span className="unknown-value">NO PLAYERS FOUND</span>;
    const filterPlayers = list.filter(player => player.strSport === "Soccer");

    return filterPlayers.map(player => (
      <Player key={player.idPlayer} player={player} />
    ));
  };

  printTeams = list => {
    if (!list) return <span className="unknown-value">NO TEAMS FOUND</span>;
    const filterTeams = list.filter(team => team.strSport === "Soccer");

    return filterTeams.map(team => <Team key={team.idTeam} team={team} />);
  };

  refreshPage() {
    window.location.reload();
  }

  render() {
    const { searchTeamResults, searchPlayerResults, isLoaded } = this.state;

    if (!isLoaded) return "Loading....";

    return (
      <div className="search-page">
        <div>
          <span className="teams-and-players">TEAMS</span>
          <ul className="player-list">{this.printTeams(searchTeamResults)}</ul>
        </div>
        <div>
          <span className="teams-and-players">PLAYERS</span>
          <ul className="player-list">
            {this.printPlayers(searchPlayerResults)}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchResults);
