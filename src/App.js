import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Game from './pages/game/Game.jsx';
import Order from './pages/order/Order.jsx';

function App () {
	return (
		<div className = "App">
			<Header/>
			<Routes>
			  <Route path="/" element={<Home/>} />
		    <Route path="order" element={<Order />} />
     		<Route path="app/:title" element={<Game />} />
     </Routes>
		</div>
	);
}

export default App;