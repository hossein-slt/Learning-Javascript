function loadingSing(str, times) {
    return str.repeat(times) + "LOADING" + str.repeat(times);
}

console.log(loadingSing("//", 7));