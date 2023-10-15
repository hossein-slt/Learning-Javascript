
function sum(...items) {
    if(items.length === 1 && Array.isArray(items[0])) // Here we're trying to say if the item is an array try so sum its values.
        items = [...items[0]];

    return items.reduce((a, b) => a + b);  // This part is only to sum the arguments.
}

console.log(sum([1, 2, 3, 4]));

