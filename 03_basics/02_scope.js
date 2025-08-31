let a = 10
const b = 20
var c = 30


// We don't use var while writing code as it has some scope issues
    // if we define it in block scope then also available for global scope

// ***INTERVIEW***
    // global scope is different when we work on node environment and when in browser console


//***  Basic overview on CLOUSER property ***





// Expression and functions ****
// functions : when you just define a fucntion
          // : you can use function before declaration of fucntion also because of housting concept
//Expressions : when you store a function in variable.
          // : hoisting doesn't work here
// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}