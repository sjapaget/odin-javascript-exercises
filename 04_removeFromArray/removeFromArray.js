const removeFromArray = function(array, ...elements) {

    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (elements.includes(array[i])) {
            //do nothing
        } else {
            result.push(array[i])
        }
    }

    return result;
};

console.log(removeFromArray([1, 2, 3, 4], 2, 3, 7))
/*
    Iterate across the given array

    for each element in the array, iterate across elements
        if arr[i] == elements[j] then don't push it to results
        else if no match found - push it to results
*/

// Do not edit below this line
module.exports = removeFromArray;
