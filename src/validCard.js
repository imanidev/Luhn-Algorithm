const validCard = (cardNumber) => {
	let sum = 0; //initialize sum
	const digits = cardNumber.toString(); //convert number to string
	for (let i = digits.length - 1; i >= 0; i--) {
		//loop backwards
		let digit = parseInt(digits[i]); //convert string to number
		if ((digits.length - i) % 2 === 0) {
			//if the digit is in an even position
			digit *= 2; //multiply by 2
			if (digit > 9) {
				//if the digit is greater than 9
				digit -= 9; //subtract 9
			}
		}
		sum += digit; //add the digit to the sum
	}
	if (sum % 10 === 0) {
		//if the sum is divisible by 10
		return 'Valid'; //then it's a valid card number
	} else {
		return 'Not a valid card number'; //otherwise it's not
	}
};

export default validCard;
