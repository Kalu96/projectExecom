import React from "react";
import "../Team.css";
import Popup from "reactjs-popup";
import EventInfo from "./EventInfo";

const LastEvents = props => {
  const { events } = props;

  if (!events) return <span className="unknown-value">UNKNOWN VALUE</span>;
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
              <div>{`Event: ${item.strEvent || "UNKNOWN VALUE"}`}</div>
              <div>
                {`Result: ${item.intHomeScore ||
                  "UNKNOWN VALUE"} : ${item.intAwayScore || "UNKNOWN VALUE"}`}
              </div>
              <div>{`Round: ${item.intRound || "UNKNOWN VALUE"}`}</div>
              <div>{`Date event: ${item.dateEvent || "UNKNOWN VALUE"}`}</div>
              <div className="last-event-spectators">{`Spectators: ${item.intSpectators ||
                "No details available"}`}</div>
              <div className="last-event-home-team">
                <span className="home-team-span"> HOME TEAM </span>
                <span>LINE UP</span>
                <div className="lineup">
                  <div>
                    {`${item.strHomeLineupGoalkeeper || "UNKNOWN VALUE"}`}
                  </div>
                  <div> {`${item.strHomeLineupDefense || ""} `}</div>
                  <div> {`${item.strHomeLineupMidfield || ""} `}</div>
                  <div> {`${item.strHomeLineupForward || ""} `}</div>
                </div>
                <div className="bench">
                  {`BENCH: ${item.strHomeLineupSubstitutes ||
                    "UNKNOWN VALUE"} `}
                </div>
                <div>
                  {`HOME GOAL DETAILS: ${item.strHomeGoalDetails || "-"} `}
                </div>
                <div>{`YELLOW CARDS: ${item.strHomeYellowCards || "-"} `}</div>
                <div> {`RED CARDS: ${item.strHomeRedCards || "-"} `}</div>
              </div>
              <div className="last-event-away-team">
                AWAY TEAM
                <div>LINE UP</div>
                <div className="lineup">
                  <div>
                    {`${item.strAwayLineupGoalkeeper || "UNKNOWN VALUE"} `}
                  </div>
                  <div> {`${item.strAwayLineupDefense || ""}`}</div>
                  <div> {`${item.strAwayLineupMidfield || ""}`}</div>
                  <div> {`${item.strAwayLineupForward || ""}`}</div>
                </div>
                <div className="bench">
                  {`BENCH: ${item.strAwayLineupSubstitutes ||
                    "UNKNOWN VALUE"} `}
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
