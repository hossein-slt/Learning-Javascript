const output = fizzbuzz(30)
console.log(output)

function fizzbuzz(input) {
    if (typeof input !== "number")
        return "NaN";

    else if ((input % 3 === 0) && (input % 5 === 0))
        return "FizzBuzz";

    else if (input % 3 === 0)
        return "Fizz";

    else if (input % 5 === 0)
        return "Buzz";

    return input
}

