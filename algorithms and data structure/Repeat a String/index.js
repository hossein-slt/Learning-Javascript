// There are two solutions:
// The first one is to use 'for' loop.

function repeatString(str, num) {
    let accumulator = "";

    for (let i = 0; i < num; i++) {
        accumulator += str;
    }
    return accumulator;
}

console.log(repeatString("abc", 3))

// It is also possible to use Recursive Solution.

function repeatstr(str, num) {
    return num > 0 ? str + repeatstr(str, num - 1) : '';
}

console.log(repeatstr("abc", 3))