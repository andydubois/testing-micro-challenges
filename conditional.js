function biggerNumber(num1, num2) {
    if (num1 > num2) {
        return 'The first number was bigger!'
    } else if (num2 > num1) {
        return 'The second number was bigger!'
    } else {
        return 'The numbers are the same!'
    }
}
//example 1
console.log(biggerNumber(3,2));
//example 3
console.log(biggerNumber(2, 7));
//example 2
console.log(biggerNumber(7,7));