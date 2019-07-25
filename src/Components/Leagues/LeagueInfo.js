import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./League.css";
import Team from "../Teams/Team";
import LastEvents from "../Teams/TeamComponents/LastEvents";
import NextEvents from "../Teams/TeamComponents/NextEvents";
import LeagueTable from "./LeagueComponents/LeagueTable";

class LeagueInfo extends React.Component {
  state = {
    selectedSeasson: null
  };

  render() {
    const {
      league: {
        idLeague,
        strLeague,
        intFormedYear,
        strDescriptionEN,
        strCountry,
        strWebsite,
        strFacebook,
        strTwitter,
        strBadge
      },
      table,
      nextEvents,
      lastEvents,
      teams
    } = this.props;

    const leagueInfo = [
      {
        name: "League",
        object: strLeague
      },
      {
        name: "Formed year",
        object: intFormedYear
      },
      {
        name: "League country",
        object: strCountry
      },
      {
        name: "Website",
        object: strWebsite
      },
      {
        name: "Facebook",
        object: strFacebook
      },
      {
        name: "Twitter",
        object: strTwitter
      }
    ];

    return (
      <div className="main">
        <div className="col-1">
          <div>
            <img src={strBadge} height="100px" width="100px" />
          </div>
          {leagueInfo.map(item => (
            <div key={idLeague}>{`${item.name}: ${item.object ||
              "UNKNOWN VALUE"}`}</div>
          ))}
        </div>

        <div className="col-2">
          <Tabs>
            <TabList className="tab-list">
              <Tab>ABOUT</Tab>
              <Tab>TABLE</Tab>
              <Tab>LAST EVENTS</Tab>
              <Tab>NEXT EVENTS</Tab>
              <Tab>TEAMS</Tab>
            </TabList>

            <TabPanel className="tab-bio">
              <h2>{strDescriptionEN}</h2>
            </TabPanel>
            <TabPanel className="tab-table">
              {<LeagueTable table={table} />}
            </TabPanel>
            <TabPanel className="tab-events">
              {<LastEvents events={lastEvents} />}
            </TabPanel>
            <TabPanel className="tab-events">
              {<NextEvents events={nextEvents} />}
            </TabPanel>
            <TabPanel className="tab-players">
              {teams.map(item => (
                <Team key={item.idTeam} team={item} />
              ))}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default LeagueInfo;
