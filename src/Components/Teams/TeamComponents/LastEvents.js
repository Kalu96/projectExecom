import React from "react";
import "../Team.css";
import Popup from "reactjs-popup";
import EventInfo from "./EventInfo";

const LastEvents = props => {
  const { events } = props;
  const unknownValue = "UNKNOWN VALUE";

  if (!events) return unknownValue;
  return (
    <div className="event-teams-wrap">
      {events.map(item => (
        <div key={item.idEvent} className="event-items">
          <EventInfo lastEvents={item} />
          <Popup
            trigger={<button className="button"> DETAILS </button>}
            modal
            closeOnDocumentClick
          >
            <span>
              <div>{`Event: ${item.strEvent || unknownValue}`}</div>
              <div>
                {`Result: ${item.intHomeScore ||
                  unknownValue} : ${item.intAwayScore || unknownValue}`}
              </div>
              <div>{`Round: ${item.intRound || unknownValue}`}</div>
              <div>{`Date event: ${item.dateEvent || unknownValue}`}</div>
              <div className="last-event-spectators">{`Spectators: ${item.intSpectators ||
                "No details available"}`}</div>
              <div className="last-event-home-team">
                <span className="home-team-span"> HOME TEAM LINE UP </span>

                <div className="lineup">
                  <div>{`${item.strHomeLineupGoalkeeper || unknownValue}`}</div>
                  <div> {`${item.strHomeLineupDefense || ""} `}</div>
                  <div> {`${item.strHomeLineupMidfield || ""} `}</div>
                  <div> {`${item.strHomeLineupForward || ""} `}</div>
                </div>
                <div className="bench">
                  {`BENCH: ${item.strHomeLineupSubstitutes || unknownValue} `}
                </div>
                <div>
                  {`HOME GOAL DETAILS: ${item.strHomeGoalDetails || "-"} `}
                </div>
                <div>{`YELLOW CARDS: ${item.strHomeYellowCards || "-"} `}</div>
                <div> {`RED CARDS: ${item.strHomeRedCards || "-"} `}</div>
              </div>
              <div className="last-event-away-team">
                <span className="away-team-span">AWAY TEAM LINE UP</span>

                <div className="lineup">
                  <div>
                    {`${item.strAwayLineupGoalkeeper || unknownValue} `}
                  </div>
                  <div> {`${item.strAwayLineupDefense || ""}`}</div>
                  <div> {`${item.strAwayLineupMidfield || ""}`}</div>
                  <div> {`${item.strAwayLineupForward || ""}`}</div>
                </div>
                <div className="bench">
                  {`BENCH: ${item.strAwayLineupSubstitutes || unknownValue} `}
                </div>
                <div>
                  {`AWAY GOAL DETAILS: ${item.strAwayGoalDetails || "-"} `}
                </div>
                <div>{`YELLOW CARDS: ${item.strAwayYellowCards || "-"} `}</div>
                <div> {`RED CARDS: ${item.strAwayRedCards || "-"} `}</div>
              </div>
              <div>{`Matct description: ${item.strDescriptionEN ||
                "No description available"}`}</div>
            </span>
          </Popup>
        </div>
      ))}
    </div>
  );
};

export default LastEvents;
