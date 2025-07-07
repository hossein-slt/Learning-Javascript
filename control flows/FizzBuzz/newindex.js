// it is also possible to use array to show a range of numbers with fizzbuzz

function fizzBuzz(input) {
    const result = []

    for (let i = 1; i <= input; i++) {

        if (i % 15 === 0) result.push("FizzBuzz!")

        else if (i % 3 === 0) result.push("Fizz")

        else if (i % 5 === 0) result.push("Buzz")

        else result.push(i.toString());
    }

    return result;

}

console.log(fizzBuzz(100));