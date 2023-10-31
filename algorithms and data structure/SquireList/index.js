
const squirelist = (arr) => {
    return arr
        .filter(num => num > 0 && num % parseInt(num) === 0)
        .map(num => Math.pow(num, 2));
}

const squirelistinx = squirelist([-2, 4.8, 5, 3, -3.2]);
console.log(squirelistinx);
