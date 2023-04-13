import React, { useState, useEffect } from 'react';
import validCard from './validCard';

const Form = () => {
	const [ cardNumber, setCardNumber ] = useState('');
	const [ cardValidity, setCardValidity ] = useState('');

	useEffect(
		() => {
			if (cardNumber !== '') {
				setCardValidity(validCard(cardNumber));
			}
		},
		[ cardNumber ]
	);

	const handleCardNumberChange = (event) => {
		setCardNumber(event.target.value);
	};

	return (
		<div>
			<form className='Form'>
				<label>
					Credit Card Number:
					<input type="text" value={cardNumber} onChange={handleCardNumberChange} />
				</label>
			</form>
			{cardValidity !== '' && <p>{`The card number is ${cardValidity}`}</p>}
		</div>
	);
};

export default Form;
