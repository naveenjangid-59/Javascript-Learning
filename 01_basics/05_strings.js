let name = "naveen"
let repoCount = 18

// concatenation
// console.log("Hello " + name + ", your repo count is " + repoCount);  // outdated way
console.log(`Hello ${name}, your repo count is ${repoCount}`); // modern way - template literals


// another way to declare strings
const gameName = new String('Smash-Karts')


let myName = "naveen"
console.log(myName[0]);
console.log(myName.length);
console.log(myName.__proto__);

console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('K'));
console.log(gameName.substring(4,1)); //swaps start,end if start > end
console.log(gameName.slice(-14));
console.log(gameName.trim());
console.log(gameName.replace('-','-the-'));
console.log(gameName.split('-'));





