import React from "react";
import "../League.css";

const LeagueTable = props => {
  const { table } = props;

  return (
    <table className="table">
      <tr>
        <th>#</th>
        <th />
        <th>P</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>T</th>
      </tr>
      {table.map((item, i) => (
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
