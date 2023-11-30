// Fetch and display games
import { addToCart } from "./cart.js";

export function displayGames(games) {
  {
    const container = document.getElementById("games-container");
    games.forEach((game) => {
      const productContainer = document.createElement("div");
      productContainer.className = "product-container";

      productContainer.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <p>Price: ${game.price}</p>
            <div class="buttoncontainer">
                <a href="#" class="button" onclick="addToCart(${game.id})">Buy</a>
                <a href="product.html?gameId=${game.id}" class="button">Read More</a>
                </div>
        `;

      container.appendChild(productContainer);
    });
  }
}
