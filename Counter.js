//Let Code Exercise Java Script
// Counter / n = 10 output needs to be 11,12,13. 

var createCounter = function (n){
    let currentCount = n - 1 // 10 - 1 = 9
    return function (){
        currentCount++;
        return currentCount
    }
}

let counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());

// Calling the function and displaying results on terminal.