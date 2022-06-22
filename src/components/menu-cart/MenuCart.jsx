import React from 'react';
import Button from '../button/Button';
import CartGame from '../cart-game/CartGame.jsx';
import './menucart.css';

function MenuCart({items, onClick}) {
	 	const totalPrice = items.reduce((acc, game) => acc += game.price, 0);

	return (
		<div className ='cart-menu'>
		<div className ='cart-menu__games-list'>
			{ items.length > 0 ? items.map((game) => 
				<CartGame 
				key={game.title}
				image={game.image}
				price={game.price}
				title={game.title}
				id={game.id}
				/>) : 'Корзина пустая' }
		</div>
		{ items.length > 0 ? 
			<div className = "cart-menu__arrange">
			<div className = "cart-menu__total-price">
			<span>Итого:</span>
			<span>{totalPrice} руб.</span>
			</div>
			<Button type="primary" size="m" onClick={ onClick }>
			Оформить заказ</Button>
			</div>
			: null
		}
		</div>
	);
}

export default MenuCart;