import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
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
      <Link className="nav-link" to={`/OneLeagueInfo/${idLeague}`}>
        <li className="league-item">
          <div className="league-item-strleague">{strLeague}</div>
          <div className="league-item-image">
            <img
              className="nav-link-img"
              src={strBadge}
              height="100px"
              width="100px"
            />
          </div>
        </li>
      </Link>
    );
  }
}

export default withRouter(League);
