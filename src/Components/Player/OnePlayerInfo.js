import React from "react";
import axios from "axios";
import Player from "./Player";

class OnePlayerInfo extends React.Component {
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
        `https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${id}`
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
          <Player key={player.idPlayer} player={player} />
        ))}
      </ul>
    );
  }
}

export default OnePlayerInfo;
