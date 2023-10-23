// reversed a string.

function reversedStr(str) {
    let reversed = "";
    for(let i = str.length -1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reversedStr("hello"));

// it is also possible to use chain method.

function reverseStr(str) {
    return str
        .split("")
        .reverse()
        .join("")
};

console.log(reverseStr("bye"))
