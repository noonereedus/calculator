function add(num1, num2) {
	return num1 + num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function sum(array) {
  answer = 0;
	for (let i = 0; i < array.length; i++) {
    answer += array[i];
  }
  return answer;
};

function multiply(array) {
  answer = 1;
	for (let i = 0; i < array.length; i++) {
    answer *= array[i];
  }
  return answer
};

function divide(array) {
  answer = 1;
	for (let i = 0; i < array.length; i++) {
    answer /= array[i];
  }
  return answer
};

function power(num1, num2) {
	return num1 ** num2;
};

function factorial(num1) {
	answer = 1
  for (let i = 1; i <= num1; i++){
    answer *= i;
  }
  return answer;
};

function operate(num1, operator, num2){
    return operator == "+" ? add(num1, num2) : operator == "-" ? subtract(num1, num2) :
    operator == "*" ? multiply([num1, num2]) : divide([num1, num2]);
}

function bindButton(value){
	if (value == "del"){
		return () => display.textContent = 0;
	}
	else {
		return () => 
		{
			if (display.textContent == "0") {
				display.textContent = value;
			}
			else {
				display.textContent += value;
			}
		}
	}

}

const display = document.querySelector("#monitor")
const buttons = document.querySelectorAll("button");
buttons.forEach( (button) => 
button.addEventListener('click', bindButton(button.textContent)));