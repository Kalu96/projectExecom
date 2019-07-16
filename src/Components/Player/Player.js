import React from "react";
import "./Player.css";
import { NavLink, withRouter } from "react-router-dom";

class Player extends React.Component {
  render() {
    const {
      player: { idPlayer, strPlayer, strThumb }
    } = this.props;

    return (
      <li className="player-item">
        <br />

        <NavLink className="nav-link" to={`/OnePlayerInfo/${idPlayer}`}>
          {strPlayer}
        </NavLink>
        <br />
        <img src={strThumb} height="100px" width="100px" />
        <br />
        <br />
        <br />
      </li>
    );
  }
}

export default withRouter(Player);
