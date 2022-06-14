import React from 'react';
import Button from '../button/Button.jsx';
import './Buy.css';

function Buy({game}) {
	return (
		<div className = "game-buy">
		<span className = "game-buy__price">{game.price} руб.</span>
			<Button 
			type='primary'
			onClick={ () => null}>
				В корзину
			</Button>
		</div>
	);
}

export default Buy;
