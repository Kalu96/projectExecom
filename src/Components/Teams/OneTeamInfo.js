import React from "react";
import axios from "axios";
import Team from "./Team";

class OneTeamInfo extends React.Component {
  state = {
    teamInfo: []
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${id}`
      )
      .then(res => {
        this.setState({ teamInfo: res.data.teams });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { teamInfo } = this.state;

    return (
      <ul>
        {teamInfo.map(team => (
          <Team key={team.idTeam} team={team} />
        ))}
      </ul>
    );
  }
}

export default OneTeamInfo;
