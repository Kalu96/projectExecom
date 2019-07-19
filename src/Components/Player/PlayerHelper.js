import React from "react";
import axios from "axios";

export const checkIfNull = item => {
  if (!item) return "UNKNOWN VALUE";
  else return item;
};

export const formerTeamCheck = item => {
  if (!item) return "UNKNOWN VALUE";
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

export const contractCheck = item => {
  if (!item) return "UNKNOWN VALUE";
  else
    return (
      <div>
        <div>Team name: {checkIfNull(item.strTeam)}</div>
        <div>Start year of contract:{checkIfNull(item.strYearStart)}</div>
        <div>End year of contract: {checkIfNull(item.strYearEnd)}</div>
        <div>Wage: {checkIfNull(item.strWage)}</div>
      </div>
    );
};

export const honorsCheck = item => {
  if (!item) return "UNKNOWN VALUE";
  else
    return item.map(item => {
      return (
        <div className="honors-items">
          <li>Team: {checkIfNull(item.strTeam)}</li>
          <li>Honor: {checkIfNull(item.strHonour)}</li>
          <li>Season: {checkIfNull(item.strSeason)}</li>
        </div>
      );
    });
};

export const axiosGet = id => {
  return ([axios.get(
    `https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${id}`
  ),
  axios.get(
    `https://www.thesportsdb.com/api/v1/json/1/lookupformerteams.php?id=${id}`
  ),
  axios.get(
    `https://www.thesportsdb.com/api/v1/json/1/lookupcontracts.php?id=${id}`
  ),
  axios.get(
    `https://www.thesportsdb.com/api/v1/json/1/lookuphonors.php?id=${id}`
  )]  
  );
};
