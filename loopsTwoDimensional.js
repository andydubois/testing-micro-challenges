// #
// Loops and Two Dimensional Arrays Checkpoint

// Create a
// function that takes in an array of arrays.Add up all of the numbers in all of the arrays and
// return the value.

function arraySum(arr) {
    console.log('in arraySum');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
            sum += arraySum(arr[i]);
        } else {
            sum += arr[i];
        }
    }

    // returning the result
    return sum;
}

console.log(arraySum([
    [1, 2],
    [3, 4, 5]
]));

console.log(arraySum([
    [1, 2],
    [3, 4, 5],
    [6]
]));



// ## Examples:

//     ###Example 1

// ``
// `
// console.log(yourFunction([ [1, 2], [3, 4, 5] ]));
// `
// ``

// should log

//     ``
// `
// 15
// `
// ``

// ###
// Example 2

//     ``
// `
// console.log(yourFunction([ [1, 2], [3, 4, 5], [6] ]));
// `
// ``

// should log


//     ``
// `
// 21