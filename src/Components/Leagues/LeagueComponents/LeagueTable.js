import React from "react";
import "../League.css";

const info = ["#", " ", "P", "W", "D", "L", "GF", "GA", "GD", "T"];

const LeagueTable = ({ teams }) => {
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
            <tr>
              {<th>{++i}</th>}
              {<th>{item.name}</th>}
              {<th>{item.played}</th>}
              {<th>{item.win}</th>}
              {<th>{item.draw}</th>}
              {<th>{item.loss}</th>}
              {<th>{item.goalsfor}</th>}
              {<th>{item.goalsagainst}</th>}
              {<th>{item.goalsdifference}</th>}
              {<th>{item.total}</th>}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default LeagueTable;
