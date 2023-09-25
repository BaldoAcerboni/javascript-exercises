const findTheOldest = function(arr) {
    let oldest = {}
    for(let el of arr) {
        if(el.yearOfDeath) {
            el.yearsLived = el.yearOfDeath - el.yearOfBirth
        } else {
            el.yearsLived = new Date().getFullYear() - el.yearOfBirth
        }
        if(!oldest.yearsLived) {
            oldest = el;
        } else if(oldest.yearsLived < el.yearsLived) {
            oldest = el
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
