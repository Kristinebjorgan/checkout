// Import functions from other modules
import { fetchGames } from "./api.js";
import { addToCart, updateCartCount } from "./cart.js";
import { handleCheckout, clearCart } from "./checkout.js";
import { displayGames } from "./games.js";
import { displayGameDetails, loadProductDetails } from "./product.js";

// Back button functionality
function backButton() {
  const backButtonElement = document.getElementById("backButton");
  if (backButtonElement) {
    backButtonElement.addEventListener("click", function () {
      window.history.back();
    });
  }
}

// Function to display cart contents and calculate totals (from checkout.js)
function displayCartContents() {
  const cartContainer = document.getElementById("cart-container");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let subtotal = 0;

  cart.forEach((game) => {
    const gameElement = document.createElement("div");
    gameElement.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <p>${game.title}</p>
      <p>Price: ${game.price}</p>
    `;
    cartContainer.appendChild(gameElement);
    subtotal += game.price;
  });

  // Calculate tax and total
  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  document.getElementById(
    "subtotal"
  ).textContent = `Subtotal: ${subtotal.toFixed(2)} EUR`;
  document.getElementById("tax").textContent = `Tax: ${tax.toFixed(2)} EUR`;
  document.getElementById("total").textContent = `Total: ${total.toFixed(
    2
  )} EUR`;
}

// Function to setup checkout page event listeners (from checkout.js)
function setupCheckoutPage() {
  displayCartContents();

  const clearCartButton = document.getElementById("clear-cart-button");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", clearCart);
  }
}

// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  backButton();

  // Conditional execution based on page
  if (document.getElementById("games-container")) {
    // Games page specific code
    fetchGames()
      .then((games) => {
        if (games && games.length > 0) {
          displayGames(games);
        } else {
          console.log("No games found");
        }
      })
      .catch((error) => console.error("Error fetching games:", error));
  }

  if (document.getElementById("cart-container")) {
    // Setup checkout page (specific to checkout page)
    setupCheckoutPage();
  }

  // Other page-specific conditions as needed...
});
