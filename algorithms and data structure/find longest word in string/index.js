
function findLongestword(str) {
    let words = str.split(' ');
    let maxlength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxlength) {
            maxlength = words[i].length;
        }
    }
    return maxlength;
}

console.log(findLongestword("Hi my name is Hossein"))
