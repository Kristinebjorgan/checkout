const baseURL = "https://api.noroff.dev/api/v1/gamehub";

export function fetchGames() {
    return fetch(baseURL)
    .then(response => response.json())
    .catch(error => console.error('Error while fetching games', error));
}

import { baseURL } from "./main.js";

export function fetchGames() {
  return fetch(`${baseURL}/path/to/your/api/endpoint`)
    .then((response) => response.json())
    .catch((error) => console.error("Error while fetching games", error));
}
