import React from "react";
import "../Player.css";

class FormerTeams extends React.Component {
  render() {
    const { teams } = this.props;

    if (!teams) return "UNKNOWN VALUE";
    else
      return (
        <div className="former-teams">
          {teams.map(item => (
            <div className="former-items">
              <div>{`Team: ${item.strFormerTeam || "UNKNOWN VALUE"}`}</div>
              <div>{`Joined: ${item.strJoined || "UNKNOWN VALUE"}`}</div>
              <div>{`Deparded: ${item.strDeparted || "UNKNOWN VALUE"}`}</div>
              <div>
                <img src={item.strTeamBadge} height="70px" width="70px" />
              </div>
            </div>
          ))}
        </div>
      );
  }
}

export default FormerTeams;
