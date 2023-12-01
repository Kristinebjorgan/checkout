// Fetch and display games
import { addToCart } from "./cart.js";

export function displayGames(games) {
  {
    const loadingMessage = document.getElementById("loader");
    const container = document.getElementById("games-container");

    if (games.length === 0) {
      loadingMessage.textContent = "No games found.";
      return;
    }

    loadingMessage.style.display = "none";

    games.forEach((game) => {
      const productContainer = document.createElement("div");
      productContainer.className = "product-container";

      productContainer.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <p>Price: ${game.price}</p>
      <div class="buttoncontainer">
          <button class="button" onclick="addToCart('${game.id}')">Add to cart</button>
          <a href="product.html?gameId=${game.id}" class="button">Read More</a>
      </div>
        `;

      container.appendChild(productContainer);
    });
  }
}
