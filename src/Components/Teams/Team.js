import React from "react";
import { NavLink } from "react-router-dom";
import "./Team.css";

class Team extends React.Component {
  render() {
    const { team } = this.props;

    return (
      <li className="team-item" key={team.idTeam}>
        ID: {team.idTeam}
        <br />
        <NavLink className="nav-link" exact to={`/PlayersInfo/${team.idTeam}`}>
          {team.strTeam}
        </NavLink>
        <br />
        <img src={team.strTeamBadge} height="100px" width="100px" />
        <br />
        <br />
      </li>
    );
  }
}

export default Team;
