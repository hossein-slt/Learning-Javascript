// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
  
console.log(convertCtoF(30));
