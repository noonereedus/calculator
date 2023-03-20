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

console.log(operate(2, "*", 3));