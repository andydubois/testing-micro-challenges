function combineStartingValuesAt(listOfThings, startingValue) {
    let newStringOfThings = '';
    for (let i = Math.abs(startingValue); i < listOfThings.length; i++) {
        newStringOfThings += listOfThings[i];
    }
    return newStringOfThings;
}

console.log(combineStartingValuesAt(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3));

console.log(combineStartingValuesAt(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 2));

//testing 


