import React from 'react';
import { Link } from "react-router-dom";
import CartBlock from '../cart-block/CartBlock.jsx';
import './header.css';

function Header() {
	return (
		<div className ='header'>
		<div className = 'wrapper'>
		<Link to = '' className = 'header__store-title'>
			Game store
		</Link>
		<div className = 'wrapper header__cart-btn-wrapper'>
			<CartBlock></CartBlock>
		</div>

		< /div>		
		</div>
	);
}
export default Header;