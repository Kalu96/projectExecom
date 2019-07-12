import React from "react";
import axios from "axios";

class Player extends React.Component {
  state = {
    playerInfo: []
  };

  componentDidMount() {
    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=34145937`
      )
      .then(res => {
        console.log("ovo:", res);
        this.setState({ playerInfo: res.data.players });
      })
      .catch(err => console.log(err));
  }

  printPlayerInfo = list => {
    return list.map(player => (
      <li key={player.idPlayer}>
        <div>{player.idPlayer}</div>
        <div>{player.strPlayer}</div>
        <div>{player.strTeam}</div>
      </li>
    ));
  };

  render() {
    const { playerInfo } = this.state;
    return <div>{this.printPlayerInfo(playerInfo)}</div>;
  }
}

export default Player;
