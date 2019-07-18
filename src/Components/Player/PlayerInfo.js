import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class PlayerInfo extends React.Component {
  checkIfNull = item => {
    if (item === null || item === "") return "UNKNOWN VALUE";
    else return item;
  };

  formerTeamCheck = item => {
    if (item === null || item === "") return "UNKNOWN VALUE";
    else
      return item.map(item => {
        return (
          <div className="former-teams">
            <div className="former-items">
              <li>Team: {item.strFormerTeam}</li>
              <li>Joined: {item.strJoined}</li>
              <li>Departed: {item.strDeparted}</li>
            </div>
            <div>
              <img src={item.strTeamBadge} height="70px" width="70px" />
            </div>
          </div>
        );
      });
  };

  contractCheck = item => {
    if (item === null || item === "") return "UNKNOWN VALUE";
    else
      return (
        <div>
          <div>Team name: {this.checkIfNull(item.strTeam)}</div>
          <div>
            Start year of contract:{this.checkIfNull(item.strYearStart)}
          </div>
          <div>End year of contract: {this.checkIfNull(item.strYearEnd)}</div>
          <div>Wage: {this.checkIfNull(item.strWage)}</div>
        </div>
      );
  };

  honorsCheck = item => {
    if (item === null || item === "") return "UNKNOWN VALUE";
    else
      return item.map(item => {
        return (
          <div className="honors-items">
            <li>Team: {this.checkIfNull(item.strTeam)}</li>
            <li>Honor: {this.checkIfNull(item.strHonour)}</li>
            <li>Season: {this.checkIfNull(item.strSeason)}</li>
          </div>
        );
      });
  };

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

    return (
      <div className="main">
        <div className="col-1">
          <div>
            <img src={strThumb} height="100px" width="100px" />
          </div>

          <div>Name: {this.checkIfNull(strPlayer)}</div>
          <div>Position: {this.checkIfNull(strPosition)}</div>
          <div>Team: {this.checkIfNull(strTeam)} </div>
          <div>Height: {this.checkIfNull(strHeight)} </div>
          <div>Weight: {this.checkIfNull(strWeight)}</div>
          <div>Date of birth: {this.checkIfNull(dateBorn)} </div>
          <div>Birth location: {this.checkIfNull(strBirthLocation)} </div>
          <div>Nationality: {this.checkIfNull(strNationality)} </div>
          <div>Number on jersey: {this.checkIfNull(strNumber)} </div>
          <div>Facebook: {this.checkIfNull(strFacebook)}</div>
          <div>Website: {this.checkIfNull(strWebsite)}</div>
          <div>Instagram: {this.checkIfNull(strInstagram)}</div>
          <div>Twiter: {this.checkIfNull(strTwitter)}</div>
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
            <TabPanel>{this.formerTeamCheck(formerTeam)}</TabPanel>
            <TabPanel> {this.contractCheck(contract)}</TabPanel>
            <TabPanel>{this.honorsCheck(honors)}</TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default PlayerInfo;
