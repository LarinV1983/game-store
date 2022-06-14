import React from 'react';
import  './GameItems.css';
import GameCover from '../game-cover/GameCover.jsx';
import Genre from '../genre/Genre.jsx';
import Buy from '../buy/Buy.jsx';

 function GameItems({game}) {
	return (
		<div className = 'game-item'>
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