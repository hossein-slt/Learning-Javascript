// In this exercise ,we're trying to find even numbers through a range of numbers

const numbers = arrayRangeEven(1, 13);
console.log(numbers);


function arrayRangeEven(min, max) {
    const output = [];

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) output.push(i)
    }
    return output;
}