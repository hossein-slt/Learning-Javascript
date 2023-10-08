//It is better to seperate actions

function calulationAverage(array) {
    let sum = 0;

    for(let value of array)
        sum += value;
    return sum / array.length;
}


function calculationGrade(marks) {
    const average = calulationAverage(marks);

    if(average < 60) return "E";
    if(average < 70) return "D";
    if(average < 80) return "C";
    if(average < 90) return "B";
    return "A";
}


const marks = [70, 79, 85];
console.log(calculationGrade(marks));
