// Reverse is only possible in arrays. so first we have to convert integer into a string, then try to split and reverse...

function isPalindrome(x) {
    let num = x.toString()
    return num 
        .split("")
        .reverse()
        .join("") === num;
};

console.log(isPalindrome(121)); // expected result is => true
console.log(isPalindrome(120)); // expected result is => false