
console.log(summ(10));


//Numbers which are multiply by 3 and 5


function summ(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
        sum += i

    return sum;

}


//Numbers which are multiply by 2


console.log(sum(10))

function sum(limit) {
    let sum = 0

    for (let i = 0; i <= limit; i++)
        if(i % 2 === 0)
        sum += i

    return sum;    

}



