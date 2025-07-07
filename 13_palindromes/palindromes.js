const palindromes = function (str) {
    let l = 0;
    let r = str.length-1;
    str = str.toLowerCase();

    while(l < r) {
        const left = str.at(l);
        const right = str.at(r);
        
        const validLeft = (left >= 'a' && left <= 'z') || (left >= '0' && left <= '9');
        const validRight = (right >= 'a' && right <= 'z') || (right >= '0' && right <= '9');

        if((!validLeft && !validRight) || ((validLeft && validRight) && left == right)) {
            l++;
            r--;
        } else if(!validLeft) {
            l++;
        } else if(!validRight) {
            r--;
        } else {
            return false;
        } 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
