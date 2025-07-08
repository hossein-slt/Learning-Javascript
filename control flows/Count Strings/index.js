// In this exercise trying to count the strings in an array, and push them into a new array

function strCount(array) {
    let count = [];
    for (let value of array)
        if (typeof value === "string")
            count.push(value);
    return count;
}

const array = [1, null, "i", undefined, "love", 3, "JavaScript"]
console.log(strCount(array));