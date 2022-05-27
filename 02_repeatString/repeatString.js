const repeatString = function(string = '', num = Math.floor(Math.random * 1000)) {

    //Check arguments received are as expected:
    if (num < 0) {return 'ERROR'}


    let result = '';

    for (let i = 0; i < num; i++){
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
