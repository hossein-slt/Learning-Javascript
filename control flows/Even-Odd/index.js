// There are two ways to have this operation

// First one

shownumber(7);

function shownumber(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i, "Even");
        else console.log(i, "Odd")
    }
}


// It is also cleaner way

// Second one

findevenodd(7);

function findevenodd(num) {
    for (let i = 0; i <= num; i++) {
        const message = (i % 2 === 0) ? "Even number" : "Odd number"
        console.log(i, message)
    }
}



