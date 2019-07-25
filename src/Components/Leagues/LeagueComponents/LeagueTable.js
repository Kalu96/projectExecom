import React from "react";
import "../League.css";

const info = ["#", " ", "P", "W", "D", "L", "GF", "GA", "GD", "T"];

const LeagueTable = ({ teams }) => {
  return (
    <table className="table">
      <tr>
        {info.map(item => (
          <th>{item}</th>
        ))}
      </tr>
      {teams.map((item, i) => (
        <tr key={item.teamId}>
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
      ))}
    </table>
  );
};

export default LeagueTable;
