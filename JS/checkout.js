// checkout.js

// Part 1: Display Cart Contents and Calculate Totals
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

  // Display these totals in the checkout page
  // You might want to add elements to your HTML to display these values
});

// Part 2: Handle the Checkout Process
export function handleCheckout() {
  // Retrieve cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Validate cart contents
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Calculate total price
  const totalPrice = cart.reduce((total, game) => total + game.price, 0);

  // Finalize the order
  console.log("Order placed", cart, `Total Price: ${totalPrice}`);

  // Clear the cart
  localStorage.removeItem("cart");

  // Provide user feedback
  alert(`Thank you for your order! Total Price: ${totalPrice}`);
}
