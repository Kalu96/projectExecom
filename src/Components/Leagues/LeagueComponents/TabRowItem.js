import React from "react";

const TabRowItem = (props) => {
    const { team:{name, played, win, draw, loss, goalsfor, goalsagainst, goalsdifference, total}} = props;
    
    const teamInfo = [
        {
          id: 0,
          name: "name",
          object: name
        },
        {
          id: 1,
          name: "played",
          object: played
        },
        {
          id: 2,
          name: "win",
          object: win
        },
        {
          id: 3,
          name: "draw",
          object: draw
        },
        {
          id: 4,
          name: "loss",
          object: loss
        },
        {
          id: 5,
          name: "goalsfor",
          object: goalsfor
        },
        {
          id: 6,
          name: "goalsagainst",
          object: goalsagainst
        },
        {
            id: 7,
            name: "goalsdifference",
            object: goalsdifference
        },
        {
            id: 8,
            name: "total",
            object: total
        }
      ];

    return(
        <tr>
        
        {teamInfo.map((item,index)=> (
          <th key={++index}>
            {`${item.object}`}
          </th>
        ))}
      </tr>
    )
}

export default TabRowItem;