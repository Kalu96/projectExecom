import React from "react";
import "../Player.css";

class FormerTeams extends React.Component {
  render() {
    const { teams } = this.props;

    if (!teams) return <span className="unknown-value">UNKNOWN VALUE</span>;
    else
      return (
        <div className="former-teams">
          {teams.map((item, index) => (
            <div className="former-items" key={index}>
              <div>{`Team: ${item.strFormerTeam || "UNKNOWN VALUE"}`}</div>
              <div>{`Joined: ${item.strJoined || "UNKNOWN VALUE"}`}</div>
              <div>{`Deparded: ${item.strDeparted || "UNKNOWN VALUE"}`}</div>
              <div>
                <img
                  src={item.strTeamBadge}
                  height="70px"
                  width="70px"
                  alt="NO DATA"
                />
              </div>
            </div>
          ))}
        </div>
      );
  }
}

export default FormerTeams;
