import React from "react";
import axios from "axios";
import PlayerInfo from "./PlayerInfo";
import { axiosGet } from "./PlayerHelper";

class OnePlayerInfo extends React.Component {
  state = {
    playerInfo: null,
    formerClubs: null,
    contract: null,
    honors: null,
    isLoaded: false
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    axios.all(axiosGet(id)).then(res => {
      const playerInfo = res[0].data.players[0] || null;
      const formerClubs = res[1].data.formerteams || null;
      const contract = res[2].data.contracts ? res[2].data.contracts[0] : null;
      const honors = res[3].data.honors || null;

      this.setState({
        playerInfo,
        formerClubs,
        contract,
        honors,
        isLoaded: true
      });
    });
  }
  render() {
    const { playerInfo, formerClubs, contract, honors, isLoaded } = this.state;

    if (!isLoaded) {
      return "LOADING...";
    }
    return (
      <ul>
        <div>
          {playerInfo && (
            <PlayerInfo
              player={playerInfo}
              formerTeam={formerClubs}
              contract={contract}
              honors={honors}
            />
          )}
        </div>
      </ul>
    );
  }
}

export default OnePlayerInfo;
