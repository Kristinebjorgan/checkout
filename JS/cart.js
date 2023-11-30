import { fetchGames } from "./api";

export function addToCart(GameId) {
    fetchGames().then(games => {
        const gameToAdd = games.find(game => game.id === gameId);

        if (!gameToAdd) {
            console.error('Game not found');
            return;
        }
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(gameToAdd);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('now in your cart');

     }) 
}