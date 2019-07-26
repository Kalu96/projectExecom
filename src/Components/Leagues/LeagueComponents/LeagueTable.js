import React from "react";
import "../League.css";
import TabRowItem from "./TabRowItem";

const info = ["", "P", "W", "D", "L", "GF", "GA", "GD", "T"];

const LeagueTable = ({ teams }) => {
  if (teams.length === 0)
    return <span className="unknown-value">UNKNOWN VALUE</span>;
  return (
    <div className="table-box">
      <table className="table">
        <tbody>
          <tr>
            {info.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </tbody>
        {teams.map((item, i) => (
          <tbody key={i}>
            <TabRowItem team={item} />
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default LeagueTable;
