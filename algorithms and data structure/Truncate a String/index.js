// Two solutions are possible.

function truncateastring(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }else {
        return str;
    }
}

console.log(truncateastring("A-tisket a-tasket A green and yellow basket", 8))

// This one is shorter and cleaner.

function truncatestr(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncatestr("A-tisket a-tasket A green and yellow basket", 8))