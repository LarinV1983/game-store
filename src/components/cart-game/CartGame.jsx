import React from 'react';
import './cart-game.css';

 function CartGame({ title, price, id }) {
	return (
		<div className = 'cart-game'>
		<span>{ title }</span>
		<div className = 'cart-game__price'>
		<span>{ price } руб.</span>

			
		</div>
		</div>
	);
}

export default CartGame;