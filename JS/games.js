// Fetch and display games
import { fetchGames } from "./api.js";

export function displayGames(games) {
  const container = document.getElementById("games-container");
  games.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
            <img class="game-img" src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <p>Price: ${game.price}</p>
            <p>Discount Price: ${game.discountPrice}</p>
            <button class="buy-button" onclick="addToCart(${game.id})">Buy</button>
        `;
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => addToCart(game.id));
    card.appendChild(addButton);

    container.appendChild(card);
  });
}
