


star(7);

function star(rows) {
    for(let row = 1; row <= rows; row++) {
        let pattern = "";
        for (let i = 0; i < row; i++)
            pattern += "*";
        console.log(pattern);
    }
}








