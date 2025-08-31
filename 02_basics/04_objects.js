// object using constructor. -- singleton


const tinderUser = new Object() // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "rashi"
tinderUser.isLoggedIn = false

console.log(tinderUser)

// Object inside object
// Nested objects


// Use optional chaining while accessing

 
// Merging two or more objects -- Object.assign()
const obj1 = {'a':1,'b':2}
const obj2 = {'c':3,'d':4}
const obj3 = {'e':5,'f':6}
//Object.assgin() : obj1(target) contains all keys-values from obj1,2,3
const objTarget = Object.assign(obj1,obj2,obj3);
console.log(objTarget === obj1) // true
console.log(obj1) 


// Merging two or more objects -- spread Operator [used 90% of the time]
const obj4 = {...obj1,...obj2,...obj3}
console.log("obj4 : ",obj4)


// fetch all keys of an object in an array
console.log("tinderUser object keys : ",Object.keys(tinderUser))
console.log("tinderUser object values : ",Object.values(tinderUser))
console.log("tinderUser object entries : ",Object.entries(tinderUser)) // used less comparatively



// hasOwnProperty(key) to check wether a key. exists or not 
console.log("tinderUser object key existance check : ",tinderUser.hasOwnProperty('isLoggedIn'))




// Destructuring of objects. -- also works in arrays [ syntactical sugar😂]
const courseObj = {
    courseName : "Js youtube",
    coursePrice : "$20",
    courseInstructor : "Hitesh Choudhary"
}

const {courseInstructor : ins} = courseObj
console.log("destructure your object : ",ins);



// JSON OBJECT
// -> keys and values both are strings

// api's form
// {
//     "name" : "Naveen",
//     "courseName" : "JS YouTube",
//     "Price" : " Free"
// }

// sometimes api's are in the form of arrays
// [
//     {},
//     {},
//     {}
// ]
