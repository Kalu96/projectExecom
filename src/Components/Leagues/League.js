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
        `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${
          this.props.league.idLeague
        }`
      )
      .then(res => {
        this.setState({ leagueDetail: res.data.leagues[0] });
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      league: { idLeague, strLeague }
    } = this.props;
    const {
      leagueDetail: { strBadge }
    } = this.state;

    return (
      <li className="league-item">
        <div>ID: {idLeague}</div>
        <div>
          <NavLink className="nav-link" to={`/TeamsInfo/${idLeague}`}>
            {strLeague}
          </NavLink>
        </div>
        <NavLink className="nav-link" to={`/TeamsInfo/${idLeague}`}>
          <div>
            <img
              className="nav-link-img"
              src={strBadge}
              height="40px"
              width="40px"
            />
          </div>
        </NavLink>
      </li>
    );
  }
}

export default withRouter(League);
