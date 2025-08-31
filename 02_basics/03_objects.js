// in arrays we can't define keys by ourselves
// in objects we can define keys by ourselves

// two ways to declare objects
// 1.literal      -- not singleton
// 2.constructor. -- songleton
//  Only difference between literal and constructor
// literal -> you can create multiple instances of the object   
// constructor -> you can create only one instance of the object


//singleton -> only one instance of the object

// object literals
// const obj1 = {}

//constructor 
// obj.create()




// object literals
const jsUser = {
    name: "Naveen",
    age: 22,
    "fullName": "Naveen Kumar",
    email: "naveen@google.com",
    location: "India",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}



// jsUser.age   // not a good way to access the object properties
// jsUser["age"]  // preferred way to access the object properties
console.log(jsUser.age);
console.log(jsUser["age"]);

console.log(jsUser["fullName"]); // here can't use dot notation




// How to Use Symbol as a Key in Onject *** INTERVIEW QUESTION ****
const mySym = Symbol("email")
const jsUser2 = {
    name: "Naveen",
    age: 22,
    [mySym]: "heyy",
    email: "naveen@google.com",
    location: "India",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}
console.log(jsUser2.mySym); // here it will not take symbol as a key. -- logs undefined as this is incorrect way to access sumbol key
console.log(jsUser2[mySym]); // here it will take symbol as a key

jsUser2[mySym] = "heeyy2"
console.log(jsUser2);




// don't let us modify the object
// freeze() - to freeze the object
/* Object.freeze(jsUser2)
jsUser2["email"] = "hey@gmail.com". 
console.log(jsUser2); // email will not be changed as object is freezed
*/



// Add a fuction as a value in the object 
const jsUser3 = {
    name: "Naveen", 
    age: 22,    
    greet : function(){
        console.log("Hello User3");
        // return 1
    }
}

jsUser2.greetUser = function() {
    console.log(`Hello User2, ${this.name}`); // this keyword refers to the current object
}
jsUser2.greetUser()
console.log(jsUser2.greetUser)  //  Reference of the function
console.log(jsUser3.greet()) // logs mentioned one and  gives undefined as function doesn't return anything

