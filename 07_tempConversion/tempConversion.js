const ftoc = function(fahrenheit) {
  let temp = (fahrenheit -32) * (5/9);
  return Math.round(temp * 10) / 10;
};

const ctof = function(celsius) {
  let temp = celsius * 9/5 + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
