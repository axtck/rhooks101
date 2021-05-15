import axios from "axios";

export const pokeInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
});
