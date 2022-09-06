var currentNumberWrapper = document.querySelector('.food-number');
var currentNumber = 1;

function incremet() {
	currentNumber = currentNumber + 1
	currentNumberWrapper.innerHTML = currentNumber


	if (currentNumberWrapper.innerHTML > 10) {
		currentNumber = 10
		currentNumberWrapper.innerHTML = currentNumber
	}
}

function decrement() {
	currentNumber = currentNumber - 1
	currentNumberWrapper.innerHTML = currentNumber

	if (currentNumberWrapper.innerHTML <= 1) {
		currentNumber = 1
		currentNumberWrapper.innerHTML = currentNumber
	}
}