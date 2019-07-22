import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Team.css";
import NextEvents from "./TeamComponents/NextEvents";
import LastEvents from "./TeamComponents/LastEvents";
import Player from "../Player/Player";

export const TeamInfo = props => {
  const {
    team: {
      strTeam,
      strTeamBadge,
      strDescriptionEN,
      intFormedYear,
      strLeague,
      strStadium,
      strStadiumThumb,
      strStadiumDescription,
      strStadiumLocation,
      intStadiumCapacity,
      strWebsite,
      strFacebook,
      strTwitter,
      strInstagram,
      strCountry,
      strTeamJersey
    },
    nextEvents,
    lastEvents,
    players,
  } = props;

  const teamInfo = [
    {
      name: "Team",
      object: strTeam
    },
    {
      name: "Formed year",
      object: intFormedYear
    },
    {
      name: "Team country",
      object: strCountry
    },
    {
      name: "League",
      object: strLeague
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
    },
    {
      name: "Instagram",
      object: strInstagram
    }
  ];

  const stadiumInfo = [
    {
      name: "Stadium",
      object: strStadium
    },
    {
      name: "Description",
      object: strStadiumDescription
    },
    {
      name: "Stadium location",
      object: strStadiumLocation
    },
    {
      name: "Stadium capacity",
      object: intStadiumCapacity
    }
  ];


  return (
    <div className="main">
      <div className="col-1">
        <div>
          <img src={strTeamBadge} height="100px" width="100px" />
        </div>
        {teamInfo.map(item => (
          <div>{`${item.name}: ${item.object || "UNKNOWN VALUE"}`}</div>
        ))}
        Jersey
        <div>
          <img src={strTeamJersey} height="100px" width="100px" />
        </div>
      </div>

      <div className="col-2">
        <Tabs>
          <TabList className="tabList">
            <Tab>ABOUT</Tab>
            <Tab>STADIUM</Tab>
            <Tab>NEXT EVENTS</Tab>
            <Tab>LAST EVENTS</Tab>
            <Tab>PLAYERS</Tab>
          </TabList>

          <TabPanel className="tabBio">
            <h2>{strDescriptionEN}</h2>
          </TabPanel>
          <TabPanel className="tabStadium">
            {stadiumInfo.map(item => (
              <div>{`${item.name}: ${item.object || "UNKNOWN VALUE"}`}</div>
            ))}
            <div>
              <img src={strStadiumThumb} height="400px" width="800px" />
            </div>
          </TabPanel>
          <TabPanel className="tabEvents">
            {<NextEvents events={nextEvents} />}
          </TabPanel>
          <TabPanel className="tabEvents">
            {<LastEvents events={lastEvents} />}
          </TabPanel>
          <TabPanel className="tab-players">
            {players.map(item => (
              <Player key={item.idPlayer} player={item} />
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

