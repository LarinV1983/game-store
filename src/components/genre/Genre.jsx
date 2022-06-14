import React from 'react';
import './genre.css';

function Genre({genre}) {
	return (
		<span className= 'game-genre'>
			{genre}
		</span>
	);
}
export default Genre;