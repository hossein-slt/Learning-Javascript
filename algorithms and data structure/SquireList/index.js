// we have two solutions here bith are chain method.
// first one is to use filter() and map() method.

const squirelist = (arr) => {
    return arr
        .filter(num => num > 0 && num % parseInt(num) === 0)
        .map(num => Math.pow(num, 2));
}

const squirelistinx = squirelist([-2, 4.8, 5, 3, -3.2]);
console.log(squirelistinx);


// another chain method is to use reduce() method.

const squareList = arr => {
    return arr.reduce((sqrIntegers, num) => {
        return Number.isInteger(num) && num > 0
        ? sqrIntegers.concat(num * num)
        : sqrIntegers;
    }, []);
};

const squirelistinxx = squareList([-2, 4.8, 5, 3, -3.2]);
console.log(squirelistinxx);                                    //same answer.