import React from "react";
import axios from "axios";
import PlayerInfo from "./PlayerInfo";

class OnePlayerInfo extends React.Component {
  state = {
    playerInfo: null,
    formerClubs: null,
    contract: null,
    honors: null,
    isLoaded: false
  };

  checkIfStateNull = item => {
    if (item === null) {
      this.setState({
        item: []
      });
    } else return item;
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    axios
      .all([
        axios.get(
          `https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${id}`
        ),
        axios.get(
          `https://www.thesportsdb.com/api/v1/json/1/lookupformerteams.php?id=${id}`
        ),
        axios.get(
          `https://www.thesportsdb.com/api/v1/json/1/lookupcontracts.php?id=${id}`
        ),
        axios.get(
          `https://www.thesportsdb.com/api/v1/json/1/lookuphonors.php?id=${id}`
        )
      ])

      .then(res => {
        const playerInfo = res[0].data.players[0];
        const formerClubs = res[1].data.formerteams;
        let contract = null;
        const honors = res[3].data.honors;

        if (res[2].data.contracts === null) {
          contract = null;
        } else {
          contract = res[2].data.contracts[0];
        }

        this.checkIfStateNull(playerInfo);
        this.checkIfStateNull(formerClubs);
        this.checkIfStateNull(contract);
        this.checkIfStateNull(honors);

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
    } else {
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
}

export default OnePlayerInfo;
