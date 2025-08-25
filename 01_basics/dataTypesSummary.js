/*
 Based on how the data is kept in memory and how accessed ,
 datatypes are classified into two categories
    1. Primitive data types
    2. Non-Primitive (Reference) data types

    1. primitive data types (7) : stored in stack memory
        a. number
        b. string
        c. boolean
        d. undefined        
        e. null
        f. symbol (mostly used in react and other frontend libraries)
        g. bigint
    
    2. Non-Primitive (Reference) data types (3): stored in heap memory
        a. object
        b. array
        c. function
        d. date
        e. anything else 
*/



// Symbol - creates a unique identifier. Mostly used in react and other frontend libraries
let id = Symbol("342")
let anotherId = Symbol("342")
console.log(id == anotherId); // false
console.log(id === anotherId); // false



// arrays 
let names = ["naveen", "kumar", "reddy"]
console.log(typeof names);  // object

// functions 
let sayHello = function() {
    console.log("hello");
}
console.log(typeof sayHello); // function object

// objects
let person = {
    name: "naveen",
    age: 18,
    isLoggedIn: false
}
console.log(typeof person); // object   





/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes (all datatypes have object as return type)
       Arrays  =>  object
       Function  =>  function object 
       Object  =>  object

*/


// let bigNumber = 1234567890123456789012345678901234567890n
// console.log(typeof bigNumber); // bigint





// stack memory vs heap memory
// primitive data types are stored in stack memory
// non-primitive data types are stored in heap memory
// stack memory is faster than heap memory
// stack memory is used for static memory allocation
// heap memory is used for dynamic memory allocation

// REFER README FOR MORE DIAGRAM
