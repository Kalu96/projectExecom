import React from "react";
import "../Team.css";
import Popup from "reactjs-popup";

class LastEvents extends React.Component {
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
              <div>{`Home score: ${item.intHomeScore || "UNKNOWN VALUE"}`}</div>
              <div>{`Away team: ${item.strAwayTeam || "UNKNOWN VALUE"}`}</div>
              <div>{`Away score: ${item.intAwayScore || "UNKNOWN VALUE"}`}</div>
              <div>{`Round: ${item.intRound || "UNKNOWN VALUE"}`}</div>
              <div>{`Date event: ${item.dateEvent || "UNKNOWN VALUE"}`}</div>

              <Popup
                trigger={<button className="button"> DETAILS </button>}
                modal
                closeOnDocumentClick
              >
                <span>
                  <div>{`Event: ${item.strEvent || "UNKNOWN VALUE"}`}</div>
                  <div>
                    {`Result: ${item.intHomeScore ||
                      "UNKNOWN VALUE"} : ${item.intAwayScore ||
                      "UNKNOWN VALUE"}`}
                  </div>
                  <div>{`Round: ${item.intRound || "UNKNOWN VALUE"}`}</div>
                  <div>{`Date event: ${item.dateEvent ||
                    "UNKNOWN VALUE"}`}</div>
                  <div className="last-event-spectators">{`Spectators: ${item.intSpectators ||
                    "No details available"}`}</div>
                  <div className="last-event-home-team">
                    HOME TEAM
                    <div>LINE UP</div>
                    <div className="lineup">
                      <div>
                        {`${item.strHomeLineupGoalkeeper || "UNKNOWN VALUE"}`}
                      </div>
                      <div> {`${item.strHomeLineupDefense || ""}`}</div>
                      <div> {`${item.strHomeLineupMidfield || ""}`}</div>
                      <div> {`${item.strHomeLineupForward || ""}`}</div>
                    </div>
                    <div className="bench">
                      {`BENCH: ${item.strHomeLineupSubstitutes ||
                        "UNKNOWN VALUE"}`}
                    </div>
                    <div>
                      {`HOME GOAL DETAILS: ${item.strHomeGoalDetails || "-"}`}
                    </div>
                    <div>
                      {`YELLOW CARDS: ${item.strHomeYellowCards || "-"}`}
                    </div>
                    <div> {`RED CARDS: ${item.strHomeRedCards || "-"}`}</div>
                  </div>
                  <div className="last-event-away-team">
                    AWAY TEAM
                    <div>LINE UP</div>
                    <div className="lineup">
                      <div>
                        {`${item.strAwayLineupGoalkeeper || "UNKNOWN VALUE"}`}
                      </div>
                      <div> {`${item.strAwayLineupDefense || ""}`}</div>
                      <div> {`${item.strAwayLineupMidfield || ""}`}</div>
                      <div> {`${item.strAwayLineupForward || ""}`}</div>
                    </div>
                    <div className="bench">
                      {`BENCH: ${item.strAwayLineupSubstitutes ||
                        "UNKNOWN VALUE"}`}
                    </div>
                    <div>
                      {`AWAY GOAL DETAILS: ${item.strAwayGoalDetails || "-"}`}
                    </div>
                    <div>
                      {`YELLOW CARDS: ${item.strAwayYellowCards || "-"}`}
                    </div>
                    <div> {`RED CARDS: ${item.strAwayRedCards || "-"}`}</div>
                  </div>
                  <div>{`Matct description: ${item.strDescriptionEN ||
                    "No description available"}`}</div>
                </span>
              </Popup>
            </div>
          ))}
        </div>
      );
  }
}

export default LastEvents;
