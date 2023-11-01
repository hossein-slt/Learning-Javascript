const globaltitle = "WINTER IS COMING"
function urlSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-")
}

console.log(urlSlug(globaltitle));