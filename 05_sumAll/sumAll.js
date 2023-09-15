const sumAll = function(num1, num2) {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        if(num1 >= 0 && num2 >= 0) {
            const argsOrdered = [];
            let rangeSum = 0;
            
            if (num1 < num2) {
                argsOrdered.push(num1);
                argsOrdered.push(num2);
            } else {
                argsOrdered.push(num2);
                argsOrdered.push(num1);
            }
            for(let i = argsOrdered[0]; i <= argsOrdered[1]; i++) {
                rangeSum += i;
            }
            return rangeSum;

        } else {return 'ERROR'}
    } else {return 'ERROR'}
};

// Do not edit below this line
module.exports = sumAll;
