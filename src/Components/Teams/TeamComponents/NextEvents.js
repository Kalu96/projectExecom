import React from "react";
import "../Team.css";

const NextEvents = props => {
  const { events } = props;

  if (!events) return <span className="unknown-value">UNKNOWN VALUE</span>;
  return (
    <div className="event-teams-wrap">
      {events.map(item => (
        <div key={item.idEvent} className="event-items">
          <div>{`Event: ${item.strEvent || "UNKNOWN VALUE"}`}</div>
          <div>{`Home team: ${item.strHomeTeam || "UNKNOWN VALUE"}`}</div>
          <div>{`Away team: ${item.strAwayTeam || "UNKNOWN VALUE"}`}</div>
          <div>{`Round: ${item.intRound || "UNKNOWN VALUE"}`}</div>
          <div>{`Date event: ${item.dateEvent || "UNKNOWN VALUE"}`}</div>
        </div>
      ))}
    </div>
  );
};

export default NextEvents;
