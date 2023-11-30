import { fetchGames } from "./api.js";

export function addToCart(gameId) {
  fetchGames().then((games) => {
    const gameToAdd = games.find((game) => game.id === gameId);

    if (!gameToAdd) {
      console.error("Game not found");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(gameToAdd);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Game added to your cart");

    // Update cart count after adding the game
    updateCartCount();
  });
}

export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = cart.length;
  document.getElementById("cart-count").textContent = cartCount;
}
