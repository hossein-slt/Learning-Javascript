// There are 2 solutions
// First one is to use 'for' loop.
function titleCase(str) {
    const newtitle = str.split(" ");
    const updatedtitle = [];
    for (let st in newtitle) {
        updatedtitle[st] = newtitle[st][0].toUpperCase() + newtitle[st].slice(1).toLowerCase();
    }
    return updatedtitle.join(" ");
}

console.log(titleCase("hello everyone my name is hossein"))

// Here we can use chain method.

function titlecaseupper(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
        .join(" ")
}

console.log(titlecaseupper("hello everyone my name is hossein"))

// It is also possible to use regex for cleaner code.

function titlecase(str) {
    return str
        .toLowerCase()
        .replace(/(^|\s)\S/g, L => L.toUpperCase());
}

console.log(titlecase("hello everyone my name is hossein"))
