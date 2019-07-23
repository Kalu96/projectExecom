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
      id: 0,
      name: "Event",
      object: strEvent
    },
    {
      id: 1,
      name: "Home team",
      object: strHomeTeam
    },
    {
      id: 2,
      name: "Home score",
      object: intHomeScore
    },
    {
      id: 3,
      name: "Away team",
      object: strAwayTeam
    },
    {
      id: 4,
      name: "Away score",
      object: intAwayScore
    },
    {
      id: 5,
      name: "Round",
      object: intRound
    },
    {
      id: 6,
      name: "Date event",
      object: dateEvent
    }
  ];

  return (
    <div className="event-teams">
      <div className="event-items">
        {lastEventsInfo.map(item => (
          <div>
             <span key={item.id}>{`${item.name}: ${item.object ||
            "UNKNOWN VALUE"}`}</span>
          </div>         
        ))}
      </div>
    </div>
  );
};

export default EventInfo;
