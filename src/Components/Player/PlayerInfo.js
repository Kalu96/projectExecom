import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  checkIfNull,
  contractCheck,
  formerTeamCheck,
  honorsCheck
} from "./PlayerHelper";

class PlayerInfo extends React.Component {
  render() {
    const {
      player: {
        strPlayer,
        strFacebook,
        strTwitter,
        strInstagram,
        strWebsite,
        strHeight,
        strWeight,
        strPosition,
        strThumb,
        strTeam,
        dateBorn,
        strNationality,
        strNumber,
        strBirthLocation,
        strDescriptionEN
      },
      formerTeam,
      contract,
      honors
    } = this.props;

    const test = [
      {
        name: "Name",
        object: strPlayer
      },
      {
        name: "Position",
        object: strPosition
      },
      {
        name: "Team",
        object: strTeam
      },
      {
        name: "Height",
        object: strHeight
      },
      {
        name: "Weight",
        object: strWeight
      },
      {
        name: "Date of birth",
        object: dateBorn
      },
      {
        name: "Birth location",
        object: strBirthLocation
      },
      {
        name: "Nationality",
        object: strNationality
      },
      {
        name: "Number on jersey",
        object: strNumber
      },
      {
        name: "Facebook",
        object: strFacebook
      },
      {
        name: "Twiter",
        object: strTwitter
      },
      {
        name: "Instagram",
        object: strInstagram
      },
      {
        name: "Website",
        object: strWebsite
      }
    ];

    return (
      <div className="main">
        <div className="col-1">
          <div>
            <img src={strThumb} height="100px" width="100px" />
          </div>
          {test.map(item => (
            <div>{`${item.name}: ${checkIfNull(item.object)}`}</div>
          ))}
        </div>

        <div className="col-2">
          <Tabs>
            <TabList className="tabList">
              <Tab>BIO</Tab>
              <Tab>FORMER CLUBS</Tab>
              <Tab>CONTRACT</Tab>
              <Tab>HONORS</Tab>
            </TabList>

            <TabPanel className="tabBio">
              <h2>{strDescriptionEN}</h2>
            </TabPanel>
            <TabPanel>{formerTeamCheck(formerTeam)}</TabPanel>
            <TabPanel> {contractCheck(contract)}</TabPanel>
            <TabPanel>{honorsCheck(honors)}</TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default PlayerInfo;
