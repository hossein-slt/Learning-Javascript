

function move(array, index, offset) {

    const position = index + offset;
    if(position >= array.length || position < 0) {
        console.log("Invalid!");
        return;
    }


    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}


const numbers = [1, 2, 3, 4, 5, 6, 7];
const output = move(numbers, 6, -6);  // [7, 1, 2, 3, 4, 5, 6]

console.log(output);

//The code below will give invalid. because it points out of our array.

const output1 = move(numbers, 5, -6);
console.log(output1);  // Invalid!



