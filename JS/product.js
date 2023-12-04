import { fetchGames } from "/JS/api.js";
import { addToCart } from "/JS/cart.js"; 

export function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const gameId = urlParams.get("gameId");
  displayGameDetails(gameId);
}

export function displayGameDetails(gameId) {
  fetchGames().then((games) => {
    const game = games.find((g) => g.id === gameId);
    if (game) {
      document.getElementById("game-image").src = game.image;
      document.getElementById("game-title").textContent = game.title;
      document.getElementById("game-description").textContent = game.description;
      document.getElementById("game-release-date").textContent = game.releaseDate; 
      document.getElementById("game-genre-value").textContent = game.genre;
      document.getElementById("game-age-rating").textContent = game.ageRating;
      document.getElementById("game-price-value").textContent = game.price;
      document.getElementById("game-discount-price-value").textContent =
        game.discountPrice;
      document.getElementById("game-favourite").textContent = game.favourite
        ? "Yes"
        : "No";

      // Buy button
      const buyButtonContainer = document.getElementById(
        "buy-button-container"
      );
      if (buyButtonContainer) {
        buyButtonContainer.innerHTML = `<button class="button" onclick="addToCart('${game.id}')">ADD TO CART</button>`;
      }
    } else {
      // game not found
      const container = document.querySelector(".game-details-container");
      container.innerHTML = `<h2>Game Not Found</h2>
      <p>Sorry, the requested game could not be found. Please check the link or <a href="games.html">browse our games</a>.</p>`;
    }
  });
}
