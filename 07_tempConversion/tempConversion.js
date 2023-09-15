const convertToCelsius = function(fahr) {
  const celsius = parseFloat(((fahr - 32) * 5 / 9).toFixed(1));
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  const fahr = parseFloat((celsius * 9 / 5 + 32).toFixed(1));
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
