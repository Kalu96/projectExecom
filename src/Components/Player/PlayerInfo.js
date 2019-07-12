import React from "react";
import axios from "axios";
import Player from "./Player";

class PlayerInfo extends React.Component {
  state = {
    playerInfo: []
  };

  componentDidMount() {
    axios
      .get(
        "https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=34145937"
      )
      .then(res => {
        this.setState({ playerInfo: res.data.players });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { playerInfo } = this.state;

    return (
      <ul>
        {playerInfo.map(player => (
          <Player player={player} />
        ))}
      </ul>
    );
  }
}

export default PlayerInfo;
