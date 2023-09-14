const removeFromArray = function(arr) {
    let len = arguments.length;
    for(let j = 1; j < len; j++) {
        for (let i of arr) {
            if (i === arguments[j]) {
                arr.splice(arr.indexOf(i), 1)
            }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
