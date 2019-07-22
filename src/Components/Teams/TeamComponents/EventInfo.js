import React from "react";
import "../Team.css";

const EventInfo = props => {
  const {
    lastEvents: {
      idEvent,
      strEvent,
      strHomeTeam,
      intHomeScore,
      strAwayTeam,
      intAwayScore,
      intRound,
      dateEvent
    }
  } = props;

  const lastEventsInfo = [
    {
      name: "Event",
      object: strEvent
    },
    {
      name: "Home team",
      object: strHomeTeam
    },
    {
      name: "Home score",
      object: intHomeScore
    },
    {
      name: "Away team",
      object: strAwayTeam
    },
    {
      name: "Away score",
      object: intAwayScore
    },
    {
      name: "Round",
      object: intRound
    },
    {
      name: "Date event",
      object: dateEvent
    }
  ];

  return (
    <div className="event-teams">
      <div className="event-items">
        {lastEventsInfo.map(item => (
          <div key = {idEvent}>{`${item.name}: ${item.object || "UNKNOWN VALUE"}`}</div>
        ))}
      </div>
    </div>
  );
};

export default EventInfo;
