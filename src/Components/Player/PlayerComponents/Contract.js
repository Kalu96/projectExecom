import React from "react";
import "../Player.css";

class Contract extends React.Component {
  render() {
    const { contract } = this.props;

    if (!contract) return "UNKNOWN VALUE";
    else
      return (
        <div className="player-contract">
          <div>Team name: {contract.strTeam || "UNKNOWN VALUE"}</div>
          <div>
            Start year of contract: {contract.strYearStart || "UNKNOWN VALUE"}
          </div>
          <div>
            End year of contract: {contract.strYearEnd || "UNKNOWN VALUE"}
          </div>
          <div>Wage: {contract.strWage || "UNKNOWN VALUE"}</div>
        </div>
      );
  }
}

export default Contract;
