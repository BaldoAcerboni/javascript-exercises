const sumAll = function (a, b) {
  let minor;
  let major;
  let sum = 0;
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  } else if (a < b) {
    minor = a;
    major = b;
  } else {
    minor = b;
    major = a;
  }
  for (let i = minor; i <= major; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
