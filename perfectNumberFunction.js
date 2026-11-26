const prompt = require('prompt-sync')();
let numb = Number(prompt("Enter a integer: "));
 
    let count = 1;
    let factorsOfNumber;
    let sumOfFactors = 0;
  
    while (count < numb) {
        factorsOfNumber = numb % count;
        if (factorsOfNumber == 0) {
            sumOfFactors = sumOfFactors + count;
        }
        count++;
    }
  
    if (sumOfFactors == numb && numb > 1) {
        console.log(number + " is a perfect number");
    } else {
        console.log(number + " is not a perfect number");
    }
    
    
function perfectNumber(sumOfFactors) {
    console.log(number + " is a perfect number"); }

perfectNumber(number + " is a perfect number");

