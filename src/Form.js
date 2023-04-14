import React, { useState, useEffect } from 'react';
import validCard from './validCard';

const Form = () => {
	const [ cardNumber, setCardNumber ] = useState('');
	const [ cardValidity, setCardValidity ] = useState('');

	useEffect( //this will run when the component mounts 
		() => {
			if (cardNumber !== '') {
				setCardValidity(validCard(cardNumber));
			}
		},
		[ cardNumber ] //dependency array. this will run only when cardNumber changes
	);

	const handleCardNumberChange = (event) => {
		setCardNumber(event.target.value);
	};

	return (
		<div>
			<form className='Form'>
				<label>
					<h3>Credit Card Number:</h3>
				</label>
				<input type="text" value={cardNumber} onChange={handleCardNumberChange} />
				<h3>{cardValidity}</h3>
			</form>
		
		</div>
	);
};

export default Form;
