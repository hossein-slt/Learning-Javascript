// Factorialize a Number

function fact(num) {
    let pro = 1;
    for (let i = 2; i <= num; i++) {
        pro *= i;
    }
    return pro;
}

console.log(fact(7));

// It is also possible to use Recursive 

function factorialize(num) {
    if (num <= 0){
        return 1;
    }
    return num * factorialize(num - 1);
}

console.log(factorialize(7));