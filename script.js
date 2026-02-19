// Select DOM elements
const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

// Init variables
let operandRight;
let operandLeft;
let operator;

let dummy;


buttons.forEach(
	function (node) {
		node.addEventListener( "click", (event) => {
			dummy = node.textContent;
			switch (dummy) {
				case "CLR":
					screen.textContent = "";
					break;
				case "":
					screen.textContent += dummy;
					break;
				default:
					screen.textConten += ` ${dummy}`;
				screen.textContent += ` ${dummy}`;
			}
		});
	}

)

function operate(operator, operandRight, operandLeft) {
	let result;
	switch (operator) {
		case "+":
			result = add(operandRight, operandLeft);
			break;
		case "-":
			result = subtract(operandRight, operandLeft);
			break;
		case "*":
			result = multiply(operandRight, operandLeft);
			break;
		case "/":
			result = divide(operandRight, operandLeft);
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