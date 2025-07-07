const fibonacci = function(n) {
    if(n < 0) {
        return 'OOPS';
    } else if(n == 0) {
        return 0;
    } else if(n == 1) {
        return 1;
    } else {
        let first = 0;
        let second = 1;
        parseInt(n);

        for(let i = 2; i <= n; i++) {
            let temp = first;
            first = second;
            second += temp;
        }
        return second;
    }
};

// Do not edit below this line
module.exports = fibonacci;
