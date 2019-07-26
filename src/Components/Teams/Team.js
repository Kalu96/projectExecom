import React from "react";
import { NavLink } from "react-router-dom";
import "./Team.css";

class Team extends React.Component {
  render() {
    const {
      team: { idTeam, strTeam, strTeamBadge }
    } = this.props;

    return (
      <NavLink className="nav-link" to={`/OneTeamInfo/${idTeam}`}>
        <li className="team-item">
          <div>{strTeam}</div>
          <div>
            <img
              className="teamcard-img"
              src={strTeamBadge}
              height="100px"
              width="100px"
              alt="NO DATA"
            />
          </div>
        </li>
      </NavLink>
    );
  }
}

export default Team;
