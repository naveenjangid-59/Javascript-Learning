// [] - brackets. () - paranthesis  {} - braces

const myArr = [0,1,2,3,4,5]
// mixed data types
// resizable

// interview question
// copy operation creates shallow copy - [ shares same reference ]
// deep copy : different references



// declaring arrays in a different way
const myArr2 = new Array(1,2,3,4,5)


// ******* array -> prototype -> prototype  ****



// methods in array
myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);


// unshift and shift 
myArr.unshift(9)   // - insert value at front
myArr.shift()     // - remove element from front


// Questions to array
// includes and indexOf
console.log(myArr.includes(9));   // false boolean
console.log(myArr.indexOf(19));   // -1 as no element


// join()
const newArr3 = myArr.join('-')
console.log(newArr3);
console.log(typeof newArr3);


// interview question *****
// slice and splice
// slice - include start, exclude end 
//       - Makes no changes in original array
// splice - include start, exclude end 
//        - Manipulates original array -- take out the portion of array

const arr1 = [4,2,6,8,9,3]
console.log("A : ", arr1);

console.log("Slice : ", arr1.slice(1,3));
console.log("B : ", arr1);

console.log("Splice : ", arr1.splice(1,3));
console.log("C : ", arr1);













