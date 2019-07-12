import React from "react";
import axios from "axios";
import PlayerTest from "./PlayerTest";

class Player extends React.Component {
  state = {
    playerInfo: []
  };

  componentDidMount() {
    axios
      .get(
        'https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=34145937'
      )
      .then(res => {
        console.log("this:", res);
        this.setState({ playerInfo: res.data.players });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { playerInfo } = this.state;

    return (
      <ul>
        {playerInfo.map(player => (
          <PlayerTest playerTest={player} />
        ))}
      </ul>
    );
  }
}

export default Player;
