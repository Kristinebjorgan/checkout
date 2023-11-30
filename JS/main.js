import { fetchGames } from "./api.js";
import { displayGames } from "./displayGames.js"; // Assuming displayGames is in displayGames.js

fetchGames()
  .then((games) => {
    if (games && games.length > 0) {
      displayGames(games);
    } else {
      console.log("No games found");
    }
  })
  .catch((error) => console.error("Error fetching games:", error));
