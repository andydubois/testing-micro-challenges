// #
// Looping through an Array of Objects Checkpoint

// Create a
// function that takes in an array of employee objects.Each employee object will come in with a property called `yearsOfExperience`.
// Your
// function should
// return the total years of experience
// for all of the employees.

function findYears(array) {
    console.log('in findYears');
    let yearsExperience = array.reduce(function (total, currentValue) {
        return total + currentValue.yearsOfExperience;
    }, 0);
    return yearsExperience;
}
// ## Examples:

//     ###Example 1

console.log(findYears([{
        name: "Tony",
        yearsOfExperience: 10
    },
    {
        name: "Carla",
        yearsOfExperience: 4
    }
]));

console.log(findYears([{
        name: "Tony",
        yearsOfExperience: 10
    },
    {
        name: "Carla",
        yearsOfExperience: 4
    },
    {
        name: "Kris",
        yearsOfExperience: 14
    }
]));
// ``
// `
// console.log(yourFunction([
//     { name: "Tony", yearsOfExperience: 10 }, 
//     { name: "Carla", yearsOfExperience: 4 }
// ]));
// `
// ``

// should log

//     ``
// `
// 14
// `
// ``

// ###
// Example 2

//     ``
// `
// console.log(yourFunction([
//     { name: "Tony", yearsOfExperience: 10 }, 
//     { name: "Carla", yearsOfExperience: 4 },
//     { name: "Kris", yearsOfExperience: 14 }
// ]));
// `
// ``

// should log


//     ``
// `
// 28
// `
// ``