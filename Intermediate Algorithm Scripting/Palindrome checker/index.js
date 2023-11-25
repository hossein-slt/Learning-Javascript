// It shows if a string is the same as it is written vice versa.

function palindrome(str) {
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    let len = str.length;
    for (let i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome('eye'));

// It is also possible to use chain method.

function palindrome1(str) {
    return str
        .split("")
        .reverse()
        .join("") === str;
}

console.log(palindrome1("ear"))