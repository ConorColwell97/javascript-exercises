const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce((total, num) => total += num, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, num) => product *= num);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
	if(num === 0) return 1;

  let fact = 1;
  for(let n = 1; n <= num; n++) {
    fact *= n;
  }
  return fact;
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
