import axios from "axios";

export const axiosGet = id => {
  return [
    axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
    ),
    axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${id}&s=1920`
    ),
    axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${id}`
    ),
    axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${id}`
    ),
    axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${id}`
    )
  ];
};
