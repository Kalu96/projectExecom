import React from "react";
import "../Team.css";

class NextEvents extends React.Component {
  render() {
    const { events } = this.props;

    if (!events) return "UNKNOWN VALUE";
    else
      return (
        <div className="event-teams">
          {events.map(item => (
            <div className="event-items">
              <div>{`Event: ${item.strEvent || "UNKNOWN VALUE"}`}</div>
              <div>{`Home team: ${item.strHomeTeam || "UNKNOWN VALUE"}`}</div>
              <div>{`Away team: ${item.strAwayTeam || "UNKNOWN VALUE"}`}</div>
              <div>{`Round: ${item.intRound || "UNKNOWN VALUE"}`}</div>
              <div>{`Date event: ${item.dateEvent || "UNKNOWN VALUE"}`}</div>
            </div>
          ))}
        </div>
      );
  }
}

export default NextEvents;
