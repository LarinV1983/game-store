import React from 'react';
import { useSelector } from 'react-redux';
import GameCover from '../../components/game-cover/GameCover.jsx';
import Genre from '../../components/genre/Genre.jsx';
import Buy from '../../components/buy/Buy.jsx';
import './game.css';

function Game() {
	const game = useSelector((state) => state.game.currentGame);
	if (!game) return null;

	return (
		<div className = 'game-page'>
		<h1 className = 'game-page__title'>{game.title}</h1>
		<div className = 'game-page__content'>
			<div className = 'game-page__left'>
				 <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
            frameBorder="0"
          ></iframe>
				</div>
				<div className = 'game-page__right'>
					<GameCover image = {game.image} />
					<p>{game.description}</p>
					<p className = 'secondary-text'>Популярные метки для этого продукта:</p>
					{game.genres.map((genre) => (
            <Genre genre={genre} key={genre} />
          ))}
          <div className="game-page__buy-game">
            <Buy game={game} />
          </div>
				</div>
			</div>
		</div>
	);
}

export default Game;