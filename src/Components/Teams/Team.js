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
          <div>
            <NavLink className="nav-link" to={`/OneTeamInfo/${idTeam}`}>
              {strTeam}
            </NavLink>
          </div>
          <div>
            <img src={strTeamBadge} height="100px" width="100px" />
          </div>
        </li>
      </NavLink>
    );
  }
}

export default Team;
