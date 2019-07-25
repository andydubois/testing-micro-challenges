console.log('in testing');

//110-conditionals testing area
console.log('testing conditionals: -1 and -1, expect numbers are the same: ', biggerNumber(-1, -1));
console.log('testing conditionals: "10" and "1", expect first number bigger: ', biggerNumber("10", "1"));
console.log('testing conditionals: "10" and "100", expect first number bigger: ', biggerNumber("10", "100"));
console.log('testing conditionals: "1" and "1", expect numbers are the same: ', biggerNumber("1", "1"));
console.log('testing conditionals: "one" and "one", expect numbers are the same: ', biggerNumber("one", "one"));
console.log('testing conditionals: "ten" and "one", expect first number is bigger: ', biggerNumber("ten", "one"));


//130-loopsArraysAndConcatination

console.log('testing concat: expect one ring to rule them:', combineStartingValuesAt(['bunnies', 'one ', 'ring ', 'to ', 'rule ', 'them'], 1));
console.log('testing concat: expect 1 ring to rule them:', combineStartingValuesAt(['bunnies', 1, ' ring ', 'to ', 'rule ', 'them'], 1));
console.log('testing concat: expect nothing (trying to start from an index the array does not contain):', combineStartingValuesAt(['bunnies', 1, ' ring ', 'to ', 'rule ', 'them'], 6));
console.log('testing concat with negative index: expect one ring to rule them:', combineStartingValuesAt(['bunnies', 'one ', 'ring ', 'to ', 'rule ', 'them'], -1));