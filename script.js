// Select DOM elements
const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

// Init variables
let firstOperand = "";
let secondOperand = "";
let operator = "";
let isThereResult = false;
let dummy;

const operations = "+-*/";
const digits = "1234567890";

/* 
	The behaviour should be same with the subject page

*/


buttons.forEach(
	function (node) {
		node.addEventListener( "click", (event) => {
			dummy = node.textContent;
			// Display part
			if (dummy === "CLR") {
				clr();
			} else if (operations.includes(dummy) && operator === "") {
				operator = dummy;
				firstOperand = screen.textContent;
				screen.textContent = ""; // For now
			} else if (operations.includes(dummy)) {
				return ;
			} else if (isThereResult) {
				screen.textContent = "";
				isThereResult = 0;
				screen.textContent += dummy;
			} else if (dummy === "=") {
				secondOperand = screen.textContent;
				let result = operate(operator, Number(firstOperand), Number(secondOperand));
				if (result === NaN) {
					firstOperand = "";
					secondOperand = "";
					operator = "";
				} else {
					result = Number.parseFloat(result).toFixed(2);
					firstOperand = `${result}`;
					screen.textContent = firstOperand;
					operator = "";
					secondOperand = "";
				}
				isThereResult = true;
			} else {
				screen.textContent += dummy;
			}
		}
		)
	}
);


			// Input handling part
			// if (dummy === "CLR") {
			// 	clr();
			// } else if (operations.includes(dummy) && operator === "") {
			// 	operator = dummy;
			// } else if (operator === "" && digits.includes(dummy)) {
			// 	firstOperand += `${dummy}`;
			// } else if (operator !== "" && digits.includes(dummy)) {
			// 	secondOperand += `${dummy}`;
			// } else if (dummy === "=") {
			// 	let result = operate(operator, Number(firstOperand), Number(secondOperand));
			// 	if (result === undefined) {
			// 		screen.textContent = "Cannot divide by zero!";
			// 		firstOperand = "";
			// 	} else {
			// 		screen.textContent = result;
			// 		firstOperand = `${result}`;
			// 	}
			// 	operator = "";
			// 	secondOperand = "";
			// }

function operate(operator, firstOperand, secondOperand) {
	let result;
	switch (operator) {
		case "+":
			result = add(firstOperand, secondOperand);
			break;
		case "-":
			result = subtract(firstOperand, secondOperand);
			break;
		case "*":
			result = multiply(firstOperand, secondOperand);
			break;
		case "/":
			result = divide(firstOperand, secondOperand);
			break;
		default:
			console.log("Undefined operator");
	}
	return result;
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b === 0) {
		screen.textContent = "Cannot divide by zero!";
		return NaN;
	}
	return a / b;
}

function clr() {
	screen.textContent = "";
	firstOperand = "";
	secondOperand = "";
	operator = "";
}