const validCard = (cardNumber) => {
	let sum = 0;
	const digits = cardNumber.toString();
	for (let i = digits.length - 1; i >= 0; i--) {
		let digit = parseInt(digits[i]);
		if ((digits.length - i) % 2 === 0) {
			digit *= 2;
			if (digit > 9) {
				digit -= 9;
			}
		}
		sum += digit;
	}
	if (sum % 10 === 0) {
		return 'Valid';
	} else {
		return 'Not a valid card number';
	}
};

export default validCard;
