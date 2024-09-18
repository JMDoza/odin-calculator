const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const multiply = function(arr) {
  let total = 0  
	return arr.reduce((total, num) => total * num)
};

const divide = function(arr) {
    let total = 0  
      return arr.reduce((total, num) => total / num)
  };

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
  if (a == 0) {
    return 1
  } else {
    return a * factorial(a-1)
  }
};
