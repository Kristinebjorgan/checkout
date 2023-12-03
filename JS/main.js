// Import functions from other modules
import { fetchGames } from "./api.js";
import { addToCart } from "./cart.js";
import { handleCheckout } from "./checkout.js";
import { displayGames } from "./games.js";
import { displayGameDetails } from "./product.js";
import { loadProductDetails } from "./product.js";
import { updateCartCount } from "./cart.js";

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

  // Load product details
  if (window.location.pathname.endsWith("product.html")) {
    loadProductDetails();
  }

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
