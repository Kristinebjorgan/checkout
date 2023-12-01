// checkout.js

import { updateCartCount } from "./cart.js";

// Display cart contents and calculate totals
document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-container");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.forEach((game) => {
    const gameElement = document.createElement("div");
    gameElement.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <p>${game.title}</p>
      <p>Price: ${game.price}</p>
      <!-- Add more details as needed -->
    `;
    cartContainer.appendChild(gameElement);
  });

  // Calculate and display totals
  const subtotal = cart.reduce((total, game) => total + game.price, 0);
  const tax = subtotal * 0.1; // Example tax rate of 10%
  const total = subtotal + tax;

  // Clear Cart button
  const clearCartButton = document.getElementById("clear-cart-button");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", clearCart);
  }
});

// Handle checkout process
export function handleCheckout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const totalPrice = cart.reduce((total, game) => total + game.price, 0);
  console.log("Order placed", cart, `Total Price: ${totalPrice}`);
  alert(`Thank you for your order! Total Price: ${totalPrice}`);

  clearCart(); // Call clearCart to handle clearing the cart

    window.location.href = "HTML/success.html";
}

// Function to clear the cart
function clearCart() {
  localStorage.removeItem("cart");
  document.getElementById("cart-container").innerHTML =
    "<p>Your cart is now empty.</p>";
  updateCartCount();
}
