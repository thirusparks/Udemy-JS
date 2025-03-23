let firstNumber = 0;
let secondNumber = 1;
var resultArray = [];

resultArray.push(firstNumber);
resultArray.push(secondNumber);



function generateFibonacci(n) {
    for(var i = 2; i < n; i++){
        resultArray.push(resultArray[resultArray.length-2] + resultArray[resultArray.length-1]);
        
    }
    return resultArray
}

console.log(generateFibonacci(5));