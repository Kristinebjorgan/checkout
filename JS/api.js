const apiBaseURL = "https://api.noroff.dev/api/v1/gamehub";

export function fetchGames() {
  return fetch(apiBaseURL)
    .then((response) => response.json())
    .catch((error) => console.error("Error while fetching games", error));
}
