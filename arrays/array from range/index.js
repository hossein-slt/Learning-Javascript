
function arrayfromrange(min, max) {
    const output = [];

    for(let i = min; i <= max; i++)
        output.push(i);
    return output;
}

const numbers = arrayfromrange(1, 7);

console.log(numbers);
