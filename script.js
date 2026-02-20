// Select DOM elements
const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

// Init variables
let operandFirst = "";
let operandSecond = "";
let operator = "";

let dummy;

const operations = "+-*/";
const digits = "1234567890";

buttons.forEach(
	function (node) {
		node.addEventListener( "click", (event) => {
			dummy = node.textContent;
			// Display part
			if (screen.textContent === "Cannot divide by zero!") {
				screen.textContent = "";
			}
			if (dummy === "CLR") {
				clr();
			} else if (operations.includes(dummy)) {
				screen.textContent += ` ${dummy} `;
			} else {
				screen.textContent += `${dummy}`;
			}
			// Input handling part
			if (dummy === "CLR") {
				clr();
			} else if (operations.includes(dummy) && operator === "") {
				operator = dummy;
			} else if (operator === "" && digits.includes(dummy)) {
				operandFirst += `${dummy}`;
			} else if (operator !== "" && digits.includes(dummy)) {
				operandSecond += `${dummy}`;
			} else if (dummy === "=") {
				let result = operate(operator, Number(operandFirst), Number(operandSecond));
				if (result === undefined) {
					screen.textContent = "Cannot divide by zero!";
					operandFirst = "";
				} else {
					screen.textContent = result;
					operandFirst = `${result}`;
				}
				operator = "";
				operandSecond = "";
			}
		});
	}

)

function operate(operator, operandFirst, operandSecond) {
	let result;
	switch (operator) {
		case "+":
			result = add(operandFirst, operandSecond);
			break;
		case "-":
			result = subtract(operandFirst, operandSecond);
			break;
		case "*":
			result = multiply(operandFirst, operandSecond);
			break;
		case "/":
			result = divide(operandFirst, operandSecond);
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
		console.log("Cannot divide by zero!");
		return undefined;
	}
	return a / b;
}

function clr() {
	screen.textContent = "";
	operandFirst = "";
	operandSecond = "";
	operator = "";
}