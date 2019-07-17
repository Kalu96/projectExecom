import React from "react";
import axios from "axios";
import Player from "./Player";
import "./Player.css";

class PlayersInfo extends React.Component {
  state = {
    playerInfo: []
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${id}`
      )
      .then(res => {
        this.setState({ playerInfo: res.data.player });
      })
      .catch(err => console.log(err));
  }

  printPlayers = list => {
    const filterPlayers = list.filter(
      player => player.strPosition !== "Manager"
    );

    return filterPlayers.map(player => (
      <Player key={player.idPlayer} player={player} />
    ));
  };

  printManager = list => {
    const filterPlayers = list.filter(
      player => player.strPosition === "Manager"
    );

    return filterPlayers.map(player => (
      <Player key={player.idPlayer} player={player} />
    ));
  };

  render() {
    const { playerInfo } = this.state;

    return (
      <div>
        <ul className="player-list">{this.printPlayers(playerInfo)}</ul>

        <div>THIS IS MANAGER:</div>
        {this.printManager(playerInfo)}
      </div>
    );
  }
}

export default PlayersInfo;
