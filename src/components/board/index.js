import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';

export default function Board({
	disabled,
	dimension,
	cards,
	flipped,
	handleClick,
	solved
}) {
	return (
		<div className='board'>
			{cards.map((card) => (
				<Card
					key={card.id}
					id={card.id}
					width={dimension / 4.5}
					height={dimension / 4.5}
					type={card.type}
					flipped={flipped.includes(card.id)}
					solved={solved.includes(card.id)}
					handleClick={handleClick}
					disabled={
						flipped.includes(card.id) || disabled || solved.includes(card.id)
					}
				/>
			))}
		</div>
	);
}

Board.prototype = {
	cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
	solved: PropTypes.arrayOf(PropTypes.number).isRequired,
	handleClick: PropTypes.func.isRequired,
	dimension: PropTypes.number.isRequired,
	disabled: PropTypes.bool.isRequired
};
