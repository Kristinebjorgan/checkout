// checkout.js

import { updateCartCount } from "./cart.js";

// Display cart contents and calculate totals
document.addEventListener("DOMContentLoaded", () => {
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

  // Total
  document.getElementById(
    "subtotal"
  ).textContent = `Subtotal: ${subtotal.toFixed(2)} EUR`;
  document.getElementById("tax").textContent = `Tax: ${tax.toFixed(2)} EUR`;
  document.getElementById("total").textContent = `Total: ${total.toFixed(
    2
  )} EUR`;

  // Clear Cart
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

  clearCart(); 

  window.location.href = "success.html";
}

// Function to clear the cart
function clearCart() {
  localStorage.removeItem("cart");
  document.getElementById("cart-container").innerHTML =
    "<p>Your cart is now empty.</p>";
  updateCartCount();
}
