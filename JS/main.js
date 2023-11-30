// Import functions from other modules
import { fetchGames } from "./api.js";
import { addToCart } from "./cart.js";
import { handleCheckout } from "./checkout.js";
import { displayGames } from "./games.js";
import { displayGameDetails } from "../product.js";

// Use fetchGames to get the games data and display them
fetchGames()
  .then((games) => {
    if (games && games.length > 0) {
      displayGames(games);
    } else {
      console.log("No games found");
    }
  })
  .catch((error) => console.error("Error fetching games:", error));

import { updateCartCount } from "./cart.js";

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});

