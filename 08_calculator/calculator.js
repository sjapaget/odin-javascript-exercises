const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let total = 0;
  arr.map(item => total += item);
  return total;
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b)
};

const power = function(num, exp) {
	return num ** exp;
};

const factorial = function(num) {
  const arr = [1];
  for (let i = 1; i <= num; i++) {
    arr.push(i)
  }	
  return multiply(arr)  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
