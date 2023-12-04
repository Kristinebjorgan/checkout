// Import functions from other modules
import { fetchGames } from "/JS/api.js";
import { addToCart } from "/JS/cart.js";
import { handleCheckout } from "/JS/checkout.js";
import { displayGames } from "/JS/games.js";
import { displayGameDetails } from "/JS/product.js";
import { loadProductDetails } from "/JS/product.js";
import { updateCartCount } from "/JS/cart.js";

// Back button
function backButton() {
  const backButtonElement = document.getElementById("backButton");
  if (backButtonElement) {
    backButtonElement.addEventListener("click", function () {
      window.history.back();
    });
  }
}

// Fetch games
document.addEventListener("DOMContentLoaded", () => {
  // Update cart count
  updateCartCount();

  // Fetch and display games
  fetchGames()
    .then((games) => {
      if (games && games.length > 0) {
        displayGames(games);
      } else {
        console.log("No games found");
      }
    })
    .catch((error) => console.error("Error fetching games:", error));

  // Initialize back button
  backButton();
});
