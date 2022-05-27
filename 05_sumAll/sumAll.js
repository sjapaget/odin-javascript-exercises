const sumAll = function(num1, num2) {


    //Validate arguments provided
    if (num1 < 0 || num2 < 0) {return 'ERROR'};
    if (typeof num1 != 'number' || typeof num2 != 'number') {return 'ERROR'}

    //Array to store numbers to sum
    const arr = [];
    //Initialise start and end variables
    let start = 0;
    let end = 0;

    //Assign start and end values so for loop can calculate all the numbers between
    if (num1 < num2) {
        start = num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    }

    //loop to generate all the numbers between start and end values
    for (let i = start; i <= end; i++){
        arr.push(i);
    }

    let result = arr.reduce((a, b) => a + b)

    return result;
};

console.log(sumAll(4, 1))

// Do not edit below this line
module.exports = sumAll;
