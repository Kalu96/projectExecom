import React from "react";
import "./Player.css";
import { NavLink, withRouter } from "react-router-dom";

class Player extends React.Component {
  render() {
    const { player } = this.props;

    return (
      <li className="player-item" key={player.idPlayer}>
        <br />

        <NavLink
          className="nav-link"
          exact
          to={`/OnePlayerInfo/${player.idPlayer}`}
        >
          {player.strPlayer}
        </NavLink>
        <br />
        <img src={player.strThumb} height="100px" width="100px" />
        <br />
        <br />
        <br />
      </li>
    );
  }
}

export default withRouter(Player);
