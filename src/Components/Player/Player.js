import React from "react";
import axios from "axios";

class Player extends React.Component {
  render() {
    const { player } = this.props;
    console.log(player)
    return (
      <li key={player.idPlayer}>
        ID: {player.idPlayer}
        <br />
        Name: {player.strPlayer}
        <br />
        Position: {player.strPosition}
      </li>
    );
  }
}

export default Player;
