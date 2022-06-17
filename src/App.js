import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Header from './components/header/Header.jsx';

function App () {
	return (
		<div className = "App">
			<Header/>
			<Routes>
		    <Route path="/" element={<Home/>} />
{/*     <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />*/}
     </Routes>
		</div>
	);
}

export default App;