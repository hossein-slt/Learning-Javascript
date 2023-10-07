
const movie = {
    title : "Friends",
    year : 1994,
    country : "USA",
    view : 54
};


showproperties(movie);

function showproperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === "string")
            console.log(key, obj[key])
}





