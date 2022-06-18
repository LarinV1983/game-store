import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from "react-icons/ai";
import GameCover from '../game-cover/GameCover.jsx';
import { deleteItemCart } from '../../redux/cart/reduser';
import './orderitem.css';

function OrderItem({game}) {
	 const dispatch = useDispatch();
	  const handleDeleteClick = (() => {
	      	dispatch(deleteItemCart(game.id))
	      });

	return (
		 <div className="order-item">
            <div className="order-item__cover">
                <GameCover image={ game.image }/>
            </div>
            <div className="order-item__title">
                <span> { game.title } </span>
            </div>
            <div className="order-item__price">
                <span>{ game.price } руб.</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
	);
}

export default OrderItem;