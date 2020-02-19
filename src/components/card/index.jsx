import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Card({
	handleClick,
	id,
	flipped,
	height,
	width,
	type,
	disabled,
	solved
}) {
	return (
		<div
			className={`flip-container`}
			style={{ width, height }}
			onClick={() => (disabled ? null : handleClick(id))}>
			<div className={`flipper ${flipped || solved ? 'flipped' : ''}`}>
				<div className='back'>
					<img
						style={{ width, height }}
						src='https://i.picsum.photos/id/237/300/300.jpg'
						alt=''
					/>
				</div>
				<div className='front'>
					<img
						style={{ width, height }}
						src={`https://i.picsum.photos/id/${type}/300/300.jpg`}
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	handleClick: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	flipped: PropTypes.bool.isRequired,
	solved: PropTypes.bool.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	disabled: PropTypes.bool.isRequired
};
