import React from "react";
import axios from "axios";

class Schedule extends React.Component {
  state = {
    nextFiveTeam: []
  };

  componentDidMount() {
    axios
      .get(
        'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133602' //event by team ID
      )
      .then(res => {
        this.setState({ nextFiveTeam: res.data.events });
      })
      .catch(err => console.log(err));
  }

  printNextFiveEventsForTeam = list => {
    return list.map(event => (
      <li key={event.idEvent}>
        <div>{event.idEvent}</div>
        <div>{event.strEvent}</div>
      </li>
    ));
  };
  render() {
    const { nextFiveTeam } = this.state;
    
    return <div>{this.printNextFiveEventsForTeam(nextFiveTeam)}</div>;
  }
}

export default Schedule;
