import React from "react";
import axios from "axios";
import LeagueInfo from "./LeagueInfo";
import { axiosGet } from "./LeagueHelper";
import { Spinner } from "../Spinner/Spinner";
import "./League.css"

class OneLeagueInfo extends React.Component {
  state = {
    leagueInfo: null,
    seasonsInfo: null,
    tableInfo: null,
    nextEventsInfo: null,
    lastEventsInfo: null,
    teamsInfo: null,
    season: null,
    isLoaded: null
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    axios.all(axiosGet(id)).then(res => {
      const leagueInfo = res[0].data.leagues[0] || null;
      const tableInfo = res[1].data.table  || [];
      const nextEventsInfo = res[2].data.events  || null;
      const lastEventsInfo = res[3].data.events  || null;
      const teamsInfo = res[4].data.teams  || [];

      this.setState({
        leagueInfo,
        tableInfo,
        nextEventsInfo,
        lastEventsInfo,
        teamsInfo,
        isLoaded: true
      });
    });
  }

  render() {
    const {
      leagueInfo,
      tableInfo,
      nextEventsInfo,
      lastEventsInfo,
      teamsInfo,
      isLoaded
    } = this.state;

    if (!isLoaded) {
      return <Spinner />;
    }
    return (
      <ul>
        {leagueInfo && (
          <LeagueInfo
            league={leagueInfo}
            table={tableInfo}
            nextEvents={nextEventsInfo}
            lastEvents={lastEventsInfo}
            teams={teamsInfo}
          />
        )}
      </ul>
    );
  }
}

export default OneLeagueInfo;
