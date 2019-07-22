import React from "react";
import "../Team.css";

const EventInfo = props => {
  const {
    lastEvents: {
      strEvent,
      strHomeTeam,
      intHomeScore,
      strAwayTeam,
      intAwayScore,
      intRound,
      dateEvent
    }
  } = props;

  return (
    <div className="event-teams">
      <div className="event-items">
        <div>{`Event: ${strEvent || "UNKNOWN VALUE"}`}</div>
        <div>{`Home team: ${strHomeTeam || "UNKNOWN VALUE"}`}</div>
        <div>{`Home score: ${intHomeScore || "UNKNOWN VALUE"}`}</div>
        <div>{`Away team: ${strAwayTeam || "UNKNOWN VALUE"}`}</div>
        <div>{`Away score: ${intAwayScore || "UNKNOWN VALUE"}`}</div>
        <div>{`Round: ${intRound || "UNKNOWN VALUE"}`}</div>
        <div>{`Date event: ${dateEvent || "UNKNOWN VALUE"}`}</div>
      </div>
    </div>
  );
};

export default EventInfo;
