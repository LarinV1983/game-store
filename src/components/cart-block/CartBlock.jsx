import React from 'react';
import { useState } from 'react';
import './cart-block.css';
import { BiCartAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import MenuCart from '../menu-cart/MenuCart';

 function CartBlock() {
 	const [isCartVisible, setCartVisible] = useState(false);
 	const items = useSelector(state => state.cart.itemsCart);
 	const totalPrice = items.reduce((acc, game) => acc += game.price, 0);

 const VisibleCart = (() => {
 	 		setCartVisible(!isCartVisible);
 	 	});

	return (
		<div className= "cart-block">
		<BiCartAlt size={25} className='cart-block__icon' onClick={VisibleCart}/>
		{totalPrice > 0 ? (
			<span className = 'cart-block__total-price'>{totalPrice} руб.</span> ): null}
		{ isCartVisible &&	<MenuCart items={items} onClick={() => null}></MenuCart>		
}
   </div>
	);
}

export default CartBlock;