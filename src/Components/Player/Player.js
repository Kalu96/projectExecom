import React from "react";
import "./Player.css";
import { NavLink, withRouter } from "react-router-dom";

class Player extends React.Component {
  render() {
    const {
      player: { idPlayer, strPlayer, strThumb }
    } = this.props;

    return (
      <NavLink className="nav-link" to={`/OnePlayerInfo/${idPlayer}`}>
        <li className="player-item">
          <div className="player-name">{strPlayer}</div>

          <div className="player-img">
            <img src={strThumb} height="100px" width="100px" alt="NO DATA" />
          </div>
        </li>
      </NavLink>
    );
  }
}

export default withRouter(Player);
