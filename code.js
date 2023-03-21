function add(num1, num2) {
	let answer = num1 + num2;
	if (answer.length > 7)
	{
		return "ERR"
	}
	return answer;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function multiply(num1, num2) {
	let answer = num1 * num2;
	if (answer.length > 7)
	{
		return "ERR"
	}
	return answer;
};

function divide(num1, num2) {
	if (num2 == 0){
		return "ERR";
	}
	return num1 / num2;
};

function operate(num1, operator, num2){
    return operator == "+" ? add(num1, num2) : operator == "-" ? subtract(num1, num2) :
    operator == "*" ? multiply(num1, num2) : divide(num1, num2);
}

function count(string){
	if (string.includes("ERR")){
		return "ERR";
	}
	else {
		let operator = cache[0];
		num1 = '';
		num2 = '';
		num = 1;
		for (let i = 0; i < string.length; i++){
			if (string[i] == operator){
				num = 2;
			}
			else if (num == 1){
				num1 += string[i];
			}
			else{
				num2 += string[i];
			}
		}
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		return operate(num1, operator, num2);
	}
}

function bindButton(value){
	if (value == "del"){
		return () => {display.textContent = 0; cache = [];};
	}

	else if (["+", "-", "*", "÷"].includes(value))
	{
		return () => {
			if (display.textContent == "0")
			{
				display.textContent = "0";
			}
			else if (display.textContent.length < 7) {
				display.textContent += value;
				cache.push(value);
			}
		}
	}
	
	else if (value == "="){
		return () => 
		{
			if (cache.length == 1) {
				display.textContent = count(display.textContent);
				cache = [];
			}
			else if (cache.length > 1){
				display.textContent = "ERR";
			}
		}
	}

	else {
		return () => 
		{	
			if (display.textContent == "0") {
				display.textContent = value;
			}
			else {
				if (display.textContent.length < 7){
					display.textContent += value;
				}
			}
		}
	}

}

const display = document.querySelector("#monitor")
let cache = [];
const buttons = document.querySelectorAll("button");
buttons.forEach( (button) => 
button.addEventListener('click', bindButton(button.textContent)));