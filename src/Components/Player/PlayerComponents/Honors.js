import React from "react";
import "../Player.css";

class Honors extends React.Component {
  render() {
    const { honors } = this.props;

    if (!honors) return "UNKNOWN VALUE";
    else
      return honors.map((item, index) => {
        return (
          <div className="honors-items" key={index}>
            <li>Team: {item.strTeam || "UNKNOWN VALUE"}</li>
            <li>Honor: {item.strHonour || "UNKNOWN VALUE"}</li>
            <li>Season: {item.strSeason || "UNKNOWN VALUE"}</li>
          </div>
        );
      });
  }
}

export default Honors;
