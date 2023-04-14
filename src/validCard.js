import React from 'react';


const validCard = (cardNumber) => {
let sum = 0;
		const digits = cardNumber.toString();
		for (let i = digits.length - 1; i >= 0; i--) { // start at the end of the string (right)
			let digit = parseInt(digits[i]);
			digit *= 2;
			sum += digit;
			if (sum % 10 === 0) {
				return 'valid';
			} else {
				return 'not valid';
			}
        }
    return (
    <div>

    </div>
);
	}

export default validCard;
