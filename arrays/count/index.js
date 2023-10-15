// One way is to iterate inside the given array.

function count(array, searchelement) {
    let count = 0;
    for (let element of array)
        if (element === searchelement)
        count++
    return count
}

const numberss = [1, 2, 3, 4, 2, 2];
console.log(count(numberss, 2));


// It is also possible to use an easier way, reduce() method.

try {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    console.log(counter(numbers, 7));         // What if we have null, string or undefined instead of an array!
}
catch (e) {
    console.log(e.message);
}

function counter(array, searchelement) {
    if (!Array.isArray(array))
        throw new Error("Invalid array.")
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchelement)
        console.log(accumulator, current, searchelement)
        return accumulator + occurence;
    }, 0);
}
