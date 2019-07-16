import React from "react";
import { NavLink } from "react-router-dom";
import "./Team.css";

class Team extends React.Component {
  render() {
    const { team: {idTeam, strTeam, strTeamBadge} } = this.props;

    return (
      <li className="team-item">
        ID: {idTeam}
        <br />
        <NavLink className="nav-link" to={`/PlayersInfo/${idTeam}`}>
          {strTeam}
        </NavLink>
        <br />
        <img src={strTeamBadge} height="100px" width="100px" />
        <br />
        <br />
      </li>
    );
  }
}

export default Team;
