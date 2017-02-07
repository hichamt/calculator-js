var operator = "";
var number1 = null;
var number2 = null;

function addNumber(i) {
	var screen = document.getElementById('screen');
	screen.value = screen.value + i;
//number2 = screen.value;
}

function addOperator(value) {
	var screen = document.getElementById('screen'); 
	screen.value = screen.value + value;

	operator = value;
	if (number1 != null) {

		if (operator == "+") {
	               number1 = Number(number1) + Number(number2);
		}
		if (operator == "-") {
		               number1 = Number(number1) - Number(number2);
		}
		if (operator == "*") {
		               number1 = Number(number1) * Number(number2);
		}
		if (operator == "/") {
		               number1 = Number(number1) / Number(number2);
		}
	} else {
		number1 = number2;
	}
}

function e() {
	var screen = document.getElementById('screen');
	var k = screen.value;
	var index = k.indexOf("0,10");
	console.log("number1"  + number1);
	console.log("number2"  + number2);

	if (operator == "+") {
	       screen.value = Number(number1) + Number(number2);
	}
	if (operator == "-") {
	       screen.value = Number(number1) - Number(number2);
	}
	if (operator == "*") {
	       screen.value = Number(number1) * Number(number2);
	}
	if (operator == "/") {
	       screen.value = Number(number1) / Number(number2);
		
	}
}

function c() {
var screen = document.getElementById('screen');
operator = "";
number1 = null;
number2 = null;
screen.value = "";
}

