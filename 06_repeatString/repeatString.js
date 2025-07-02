const repeatString = function(word, num) {
    if(num < 0) return 'ERROR'

    let result = "";
    for(let i = 0; i < num; i++) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
