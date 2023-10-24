
function truncateastring(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }else {
        return str;
    }
}

console.log(truncateastring("A-tisket a-tasket A green and yellow basket", 8))


