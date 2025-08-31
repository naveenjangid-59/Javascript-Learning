


// ***INTERVIEW***
// MOst Global object in browser -- WINDOW OBJECT
// MOst global object in node environment -- {} empty object




// Normal functions vs Arrow functions
// normal function 
const obj = {
  name: "Naveen",
  normal: function() {
    console.log(this.name);
  }
};

obj.normal(); // "Naveen"


// Arrow Function
const obj2 = {
  name: "Naveen",
  arrowFunction: () => {
    console.log(this.name);
  }
};
obj2.arrowFunction(); //  undefined (because arrow takes `this` from outside, not obj)

// Normal function → "this depends on the caller".
// Arrow function → "this depends on where it was written".


// *** That's why we use this in normal function, not in arrow function

