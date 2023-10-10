

function except(array, excluded) {
    const output = [];

    for(let element of array)
        if(!excluded.includes(element))
            output.push(element);
    return output;
}

const numbers = [1, 2, 3, 4, 5];

const output = except(numbers, [1, 3]);

console.log(output);



