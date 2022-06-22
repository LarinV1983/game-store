import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../../components/order-item/OrderItem.jsx';
import'./order.css';

function Order() {
	const items = useSelector((state) => state.cart.itemsCart);
	const totalPrice = (items) => items.reduce((acc, item) => (acc += item.price), 0);

	 const enumerate = (num, dec) => {
    if (num > 100) num = num % 100;
    if (num <= 20 && num >= 10) return dec[2];
    if (num > 20) num = num % 10;
    return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
}

	 if(items.length < 1) {
        return <h1 className= 'order-title'>Ваша корзина пуста!</h1>

    }

  return (
        <div className="order-page">
            <div className="order-page__left">
                { items.map((game, id) => <OrderItem game={game}
                	key ={id}/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>{ items.length } { enumerate(items.length, ['товар', 'товара', 'товаров'])}
                     на сумму {totalPrice(items)} руб.</span>
                </div>
            </div>
        </div>
    );
}

export default Order;