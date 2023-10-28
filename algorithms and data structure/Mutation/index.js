// The first solution is to use 'for' loop.

function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}

console.log(mutation(["HELLO", "HEY"]));

// Here we can also use chain method.

function mute(arr) {
    return arr[1]
        .toLowerCase()
        .split("")
        .every(function(letter){
           return arr[0].toLowerCase().indexOf(letter) 
        });
}

console.log(mute(["GOODBYE", "BYE"]));
