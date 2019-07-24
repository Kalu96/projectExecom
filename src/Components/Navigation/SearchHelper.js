import axios from "axios";

export const axiosGet = find => [
  axios.get(
    `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${find}`
  ),
  axios.get(
    `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${find}`
  )
];


