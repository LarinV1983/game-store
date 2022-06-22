import React from 'react';
import './cart-game.css';

 function CartGame({ title, price, id, image=" " }) {
	return (
		<div className = 'cart-game'>
		<div className = 'cart-game__image' 
		style={{backgroundImage: `url(${image})`}}>
		</div>
		<span>{ title }</span>
		<div className = 'cart-game__price'>
		<span>{ price } руб.</span>
		</div>
		</div>
	);
}

export default CartGame;