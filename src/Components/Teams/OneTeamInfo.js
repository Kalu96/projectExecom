import React from "react";
import axios from "axios";
import { TeamInfo } from "./TeamInfo";
import { axiosGet } from "./TeamHelper";

class OneTeamInfo extends React.Component {
  state = {
    teamInfo: null,
    nextFiveEvents: null,
    lastFiveEvents: null,
    players: null,
    isLoaded: null
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    axios.all(axiosGet(id)).then(res => {
      const teamInfo = res[0].data.teams[0] || null;
      const nextFiveEvents = res[1].data.events || null;
      const lastFiveEvents = res[2].data.results || null;
      const players = res[3].data.player || null;

      this.setState({
        teamInfo,
        nextFiveEvents,
        lastFiveEvents,
        players,
        isLoaded: true
      });
    });
  }
  render() {
    const {
      teamInfo,
      nextFiveEvents,
      lastFiveEvents,
      isLoaded,
      players
    } = this.state;

    if (!isLoaded) {
      return "LOADING...";
    }
    return (
      <ul>
        {teamInfo && (
          <TeamInfo
            team={teamInfo}
            nextEvents={nextFiveEvents}
            lastEvents={lastFiveEvents}
            players={players}
          />
        )}
      </ul>
    );
  }
}

export default OneTeamInfo;
