const reverseString = function (str) {
  const arr = str.split("");
  const reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
