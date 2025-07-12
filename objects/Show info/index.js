
let person = {
    firstname: 'a',
    lastname: 'b',
    city: 'c'
}

function showPerosnInfo(person) {
    for (let key in person)
        console.log(key, person[key]);
}

showPerosnInfo(person);