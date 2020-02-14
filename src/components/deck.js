function shuffle(array) {
	const _array = array.slice(0);
	for (let i = 0; i < array.length - 1; i++) {
		let randomIndex = Math.floor(Math.random() * (i + 1));
		let temp = _array[i];
		_array[i] = _array[randomIndex];
		_array[randomIndex] = temp;
	}

	return _array;
}

export default function initialDeck() {
	let id = 0;
	const cards = [
		'1003',
		'1011',
		'1012',
		'1016',
		'102',
		'1025',
		'1023',
		'103',
		'1035',
		'1039',
		'1040',
		'1051',
		'1059',
		'1057',
		'1062'
	].reduce((acc, type) => {
		acc.push({
			id: id++,
			type
		});
		acc.push({
			id: id++,
			type
		});
		return acc;
	}, []);

	return shuffle(cards);
}
