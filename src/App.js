import React, { useState, useEffect } from 'react';

import Board from './components/board';
import initialDeck from './components/deck';
import './App.scss';

function App() {
	const [cards, setCards] = useState([]);
	const [flipped, setFlipped] = useState([]);
	const [dimension, setDimension] = useState(400);
	const [solved, setSolved] = useState([]);
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		resizeBoard();
		setCards(initialDeck());
	}, []);

	useEffect(() => {
		preLoadImages();
	}, cards);

	useEffect(() => {
		const resizeListener = window.addEventListener('resize', resizeBoard);
		return () => window.removeEventListener('resize', resizeListener);
	});

	const handleClick = (id) => {
		setDisabled(true);
		if (flipped.length === 0) {
			setFlipped([id]);
			setDisabled(false);
		} else {
			if (sameCardClicked(id)) {
				return;
			}
			setFlipped([flipped[0], id]);

			if (isMatch(id)) {
				setSolved([...solved, flipped[0], id]);
				resetCards();
			} else {
				setTimeout(resetCards, 1000);
			}
		}
	};

	const resetCards = () => {
		setFlipped([]);
		setDisabled(false);
	};
	const isMatch = (id) => {
		const clickedCard = cards.find((card) => card.id === id);
		const flippedCard = cards.find((card) => flipped[0] === card.id);
		return flippedCard.type === clickedCard.type;
	};

	const sameCardClicked = (id) => flipped.includes(id);

	const resizeBoard = () => {
		setDimension(
			Math.min(
				document.documentElement.clientWidth,
				document.documentElement.clientHeight
			)
		);
	};

	const preLoadImages = () => {
		cards.map((card) => {
			const src = `https://i.picsum.photos/id/${card.type}/300/300.jpg`;
			new Image().src = src;
		});
	};
	return (
		<div className='container'>
			<div className='title'>
				<h1>Puppies</h1>
				<caption>A memory game</caption>
			</div>
			<Board
				dimension={dimension}
				cards={cards}
				flipped={flipped}
				handleClick={handleClick}
				disabled={disabled}
				solved={solved}
			/>
		</div>
	);
}

export default App;
