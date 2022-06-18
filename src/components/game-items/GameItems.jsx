import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/games/reduser';
import {  useNavigate } from "react-router-dom";
import GameCover from '../game-cover/GameCover.jsx';
import Genre from '../genre/Genre.jsx';
import Buy from '../buy/Buy.jsx';
import  './GameItems.css';

 function GameItems({game}) {
const navigate = useNavigate(); 	
const dispatch = useDispatch();

 	const handleClick = (() => {
 		dispatch(setCurrentGame(game));
 		navigate(`/app/${game.title}`);
 	 	})

	return (
		<div className = 'game-item' onClick={handleClick}>
			<GameCover image={game.image} />
			<div className = 'game-item__details'>
			<span className = 'game-item__title'>{game.title}</span>
			<div className = 'game-item__genre'>
				{game.genres.map(genre => 
					<Genre genre={genre} key={genre} />)}
			</div>
			<div className = 'game-item__buy'>
			<Buy game={game} />
			</div>
			</div>
		</div>
	);
}

export default GameItems;