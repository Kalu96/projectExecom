import React from "react";
import axios from "axios";

class PlayerTest extends React.Component {
  render() {
    const { playerTest } = this.props;
    return (
      <li key={playerTest.idPlayer}>
        ID: {playerTest.idPlayer}
        <br />
        Name: {playerTest.strPlayer}
        <br />
        Position: {playerTest.strPosition}
      </li>
    );
  }
}

export default PlayerTest;
