import React from "react";
import axios from "axios";
import Team from "./Team";
import "./Team.css";

class TeamsInfo extends React.Component {
  state = {
    teamsInfo: []
  };

  componentDidMount() {
    const {
      match: { params: {id}}
    } = this.props;

    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${
          id
        }`
      )
      .then(res => {
        this.setState({ teamsInfo: res.data.teams }
        );
      })
      .catch(err => console.log(err));
  }
  render() {
    const { teamsInfo } = this.state;

    return (
      <ul className="team-list">
        {teamsInfo.map(teams => (
          <Team key={teams.idTeam} team={teams} />
        ))}
      </ul>
    );
  }
}

export default TeamsInfo;
