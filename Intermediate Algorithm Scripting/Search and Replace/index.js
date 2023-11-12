
function myReplace(str, before, after) {
    const strArr = str.split(" ");
    const [wordtoreplace] = strArr.filter(item => item === before);
    const replacement = wordtoreplace[0] ===  wordtoreplace[0].toUpperCase()
        ? after[0].toUpperCase() + after.slice(1)
        : after[0].toLowerCase() + after.slice(1);
    return strArr.map(item => (item === before ? replacement : item)).join(" ");
};

console.log(myReplace("let's go to the store", "store", "mall"));
