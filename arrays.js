function arraySum(myArray) {
    console.log('in arraySum')
    return myArray[0] + myArray[myArray.length - 1];
}

console.log(arraySum([1, 2, 3, 4, 5]));
console.log(arraySum([6, 7, 8, 9, 10, 11, 12]));