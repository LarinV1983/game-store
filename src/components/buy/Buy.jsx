import React from 'react';
import Button from '../button/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {setItemCart, deleteItemCart} from '../../redux/cart/reduser';
import './Buy.css';

function Buy({game}) {
	const dispatch = useDispatch();
	const items = useSelector(state => state.cart.itemsCart);
	const isItemCart = items.some(items => items.id === game.id);

	const handleClick = (event) => {
		event.stopPropagation();
		if (isItemCart) {
			dispatch(deleteItemCart(game.id));
		} else {
					dispatch(setItemCart(game));
		}
	}

	return (
		<div className = "game-buy">
		<span className = "game-buy__price">{game.price} руб.</span>
			<Button 
			type={isItemCart ? 'secondary' : 'primary'}
			onClick={handleClick}>
			{ isItemCart ? 'Удалить из корзины' :
				'В корзину'
			}
			</Button>
		</div>
	);
}

export default Buy;
