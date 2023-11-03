/*
    In this example it is possible to give it two numbers. 
Sometimes from small to big and sometimes vice versa.
*/
function sumAll(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}

console.log(sumAll([4, 1]));

/*
but here we try to give it one number and the function itself finds out the previous ones and add them.
and also it is possible to give to two numbers only in case the first number is small and the other one bigger that that.
*/

function sumall(arr) {
    let min = 0;
    let max = 0;

    if (arr.length == 1) {
        min = 1;
        max = arr[0];
    }else {
        min = arr[0];
        max = arr[1];
    }

    let newarray = Array.from({length: max - min + 1}, (_, a) => a + min);
        return newarray.reduce(function(accumulator, current) {
            return accumulator + current;
        })
}

console.log(sumall([4]))