import React from 'react';
import { useState, useCallback } from 'react';
import { BiCartAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import MenuCart from '../menu-cart/MenuCart';
import './cart-block.css';

 function CartBlock() {
 	const [isCartMenuVisible, setCartMenuVisible] = useState(false);
 	const items = useSelector(state => state.cart.itemsCart);
 	const totalPrice = items.reduce((acc, game) => acc += game.price, 0);
 	const navigate = useNavigate(); 	


 const VisibleCart = (() => {
 	 		setCartMenuVisible(!isCartMenuVisible);
 	 	});

 const handleOrderClick = useCallback(() => {
 	setCartMenuVisible(false);
 	navigate('order');
  }, [navigate]);

	return (
		<div className= "cart-block">
		
		<BiCartAlt size={25} className='cart-block__icon' onClick={VisibleCart}/>
		{totalPrice > 0 ? (
			<span className = 'cart-block__total-price'>{totalPrice} руб.</span> ): null}
		{ isCartMenuVisible &&	<MenuCart items={items} onClick={handleOrderClick}></MenuCart>		
}
   </div>
	);
}

export default CartBlock;