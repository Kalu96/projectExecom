import React from "react";
import axios from "axios";

class SportEvent extends React.Component {
  state = {
    eventInfo: []
  };

  componentDidMount() {
    axios
      .get(
        'https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=441613'
      )
      .then(res => {
        this.setState({ eventInfo: res.data.events });
      })
      .catch(err => console.log(err));
  }

  printEventInfo = list => {
    return list.map(event => (
      <li key={event.idEvent}>
        <div>{event.idEvent}</div>
        <div>{event.strEvent}</div>
      </li>
    ));
  };

  render() {
    const { eventInfo } = this.state;
    return <div> {this.printEventInfo(eventInfo)} </div>;
  }
}

export default SportEvent;
