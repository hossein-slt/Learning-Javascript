// There are two Declarative approaches to solve this issue.
// First is to use map and reduce.

function largestnumber(arr) {
    return arr.map(function(group) {
        return group.reduce(function(prev, current) {
            return current > prev ? current : prev;
        });
    });
}

console.log(largestnumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// Here it is possible to use apply and bind method.

function largestnum(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

console.log(largestnum([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))