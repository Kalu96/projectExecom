import axios from "axios";

export const axiosGet = id => {
  return [
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
  ];
};
