const removeFromArray = function(arr, ...args) {
    let result = arr.filter((item) => {
        let seen = false;
        let i = 0;

        while(i < args.length && !seen) {
            if(item === args[i++]) {
                seen = true;
            }
        }

        if(!seen) {
            return item;
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
