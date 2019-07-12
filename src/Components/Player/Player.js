import React from "react";

class Player extends React.Component {
  render() {
    const { player } = this.props;

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
