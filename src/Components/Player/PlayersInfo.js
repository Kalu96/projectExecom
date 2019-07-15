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
      match: { params }
    } = this.props;

    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${
          params.id
        }`
      )
      .then(res => {
        this.setState({ playerInfo: res.data.player }, () =>
          console.log("playerInfo: ", this.state.playerInfo)
        );
      })
      .catch(err => console.log(err));
  }

  printPlayers = list => {
    const filterPlayers = list.filter(player => player.strPosition !== "Manager")
    // const filterChoach

    return filterPlayers.map(player =>  <Player player={player} />);
  };

  printManager = list => {
    const filterPlayers = list.filter(player => player.strPosition === "Manager")
    // const filterChoach

    return filterPlayers.map(player =>  <Player player={player} />);
  };

  render() {
    const { playerInfo } = this.state;

    return (
      <div>
      <ul className="player-list">
        {/* {playerInfo.map(player => (
          <Player player={player} />
        ))} */}
        {this.printPlayers(playerInfo)}
       

      </ul>
      THIS IS MANAGER: <br />
      {this.printManager(playerInfo)}
      </div>
      
    );
  }
}

export default PlayersInfo;
