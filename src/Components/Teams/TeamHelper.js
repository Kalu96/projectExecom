import axios from "axios";

export const axiosGet = id => {
    return [
        axios.get(
            `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        ),
        axios.get(
            `https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${id}`
        ),
        axios.get(
            `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${id}`
        ),
        axios.get(
            `https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${id}`
        )
    ];
};