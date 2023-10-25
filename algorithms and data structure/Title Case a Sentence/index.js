
function titleCase(str) {
    const newtitle = str.split(" ");
    const updatedtitle = [];
    for (let st in newtitle) {
        updatedtitle[st] = newtitle[st][0].toUpperCase() + newtitle[st].slice(1).toLowerCase();
    }
    return updatedtitle.join(" ");
}

console.log(titleCase("hello everybody my name is hossein"))

