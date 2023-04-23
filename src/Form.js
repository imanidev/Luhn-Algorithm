import React, { useState, useEffect } from 'react';
import validCard from './validCard';

const Form = () => {
	const [ cardNumber, setCardNumber ] = useState(''); //empty string is the initial value
	const [ cardValidity, setCardValidity ] = useState('');

	useEffect(
		//this will run when the component mounts
		() => {
			if (cardNumber !== '') {
				//this will run only when cardNumber is not empty
				setCardValidity(validCard(cardNumber)); //this will update the value of cardValidity
			}
		},
		[ cardNumber ] //dependency array. this will run only when cardNumber changes
	);

	const handleCardNumberChange = (event) => {
		//this will run when the input changes
		setCardNumber(event.target.value); //this will update the  value of cardNumber
	};

	return (
		<div>
			<form className="Form">
				<h3>Credit Card Number:</h3>

				<input type="text" value={cardNumber} onChange={handleCardNumberChange} />
				<span>{cardValidity}</span>
			</form>
		</div>
	);
};

export default Form;
