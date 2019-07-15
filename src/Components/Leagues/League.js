import React from "react";
import axios from "axios";
import { NavLink, withRouter } from "react-router-dom";
import "./League.css";

class League extends React.Component {
  state = {
    leagueDetail: []
  };

  componentDidMount() {
    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id= ${
          this.props.league.idLeague
        }`
      )
      .then(res => {
        this.setState({ leagueDetail: res.data.leagues[0] }, () => {});
      })
      .catch(err => console.log(err));
  }

  render() {
    const { league } = this.props;
    const { leagueDetail } = this.state;

    return (
      <li className="league-item" key={league.idLeague}>
        <br />
        ID: {league.idLeague}
        <NavLink
          className="nav-link"
          exact
          to={`/TeamsInfo/${league.idLeague}`}
        >
          {league.strLeague}
        </NavLink>
        <br />
        <br />
        <NavLink
          className="nav-link"
          exact
          to={`/TeamsInfo/${league.idLeague}`}
        >
          <img src={leagueDetail.strBadge} height="40px" width="40px" />
        </NavLink>
        
        <br />
        <br />
      </li>
    );
  }
}

export default withRouter(League);
