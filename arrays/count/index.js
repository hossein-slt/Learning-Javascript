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

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(counter(numbers, 7));
function counter(array, searchelement) {

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchelement)
        console.log(accumulator, current, searchelement)
        return accumulator + occurence;
    }, 0)
}
