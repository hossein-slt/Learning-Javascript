
console.log(isLandscape(850, 600))

function isLandscape(width, height) {
    return(width > height)
}


// it is also possible to use a shorter and cleaner way

function isLandScape(width, height) {
    return (width > height) ? true : false;
}    
