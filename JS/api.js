const baseURL = "https://api.noroff.dev/api/v1/gamehub";

export function fetchGames() {
    return fetch(baseURL)
    .then(response => response.json())
    .catch(error => console.error('Error while fetching games', error));
}
