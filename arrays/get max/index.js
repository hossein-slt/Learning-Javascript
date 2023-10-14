//This is basic way.

function getmax(array) {
    if(array.length === 0) return undefined;

    let max = array[0];

    for(let i = 1; i < array.length; i++)
      if (array[i] > max)
        max = array[i];
    return max;
}

const numbers = [1, 2, 3, 4];
const max = getmax(numbers)
console.log(max);

// It is also possible to use a shorter one.reduce() method.

function maxelement(array) {
    if(array.length === 0) return undefined;

    return array.reduce((a, b) => (a > b) ? a : b);
}
const newnumbers = [5, 6, 7, 8];
const newmax = maxelement(newnumbers);
console.log(newmax);

