const sumAll = function(start, end) {
    if(typeof start != "number" || typeof end != "number" || start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }

    let sum = 0;
    if(start <= end) {
        for(let n = start; n <= end; n++) {
            sum += n;
        }
    } else {
        for(let n = start; n >= end; n--) {
            sum += n;
        }
    }

    return sum;
};

console.log(sumAll(2,4))

// Do not edit below this line
module.exports = sumAll;
