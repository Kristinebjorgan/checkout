import { fetchGames } from "./api.js";

export function displayGameDetails(gameId) {
  fetchGames().then((games) => {
    const game = games.find((g) => g.id === gameId);
    if (game) {
      // Update the HTML of product.html with game details
      document.getElementById("game-title").textContent = game.title;
      document.getElementById("game-description").textContent =
        game.description;
      // ...and so on for other details
    } else {
      console.error("Game not found");
    }
  });
}
