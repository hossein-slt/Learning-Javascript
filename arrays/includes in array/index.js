// Of course it is possible includes() method, but here just want to make a function to test it myself.

function includes(array, elementsearch) {
    for(let elemet of array)
        if (elemet === elementsearch)
            return true;
    return false;        
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(includes(numbers, 4));





