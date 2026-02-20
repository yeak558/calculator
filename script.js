// Select DOM elements
const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

// Init variables
let operandFirst = "";
let operandSecond = "";
let operator = "";

let dummy;


/* Problems

- Cant take more than 2 digit numbers
- Cant work right after the calculation



*/

const operations = "+-*/";

buttons.forEach(
	function (node) {
		node.addEventListener( "click", (event) => {
			dummy = node.textContent;
			// Display part
			if (dummy === "CLR") {
				screen.textContent = "";
			} else if (operations.includes(dummy)) {
				screen.textContent += ` ${dummy} `;
			} else {
				screen.textContent += `${dummy}`;
			}
			// Input handling part
			if (operations.includes(dummy)) {
				operator = dummy;
			} else if (operator === "" && dummy !== "=") {
				operandFirst += `${dummy}`;
			} else if (operator !== "" && dummy !== "=") {
				operandSecond += `${dummy}`;
			} else if (dummy === "CLR"){
				operandFirst = undefined;
				operandSecond = undefined;
				operator = undefined;
			} else {
				let result = operate(operator, Number(operandFirst), Number(operandSecond));
				screen.textContent = result;
				operandFirst = `${result}`;
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