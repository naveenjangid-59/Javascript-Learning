


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

name = "Global Scope";
// Arrow Function
const obj2 = {
  name: "Naveen",
  arrowFunction: () => {
    console.log(name); 
  }
};
obj2.arrowFunction(); //  undefined (because arrow takes `this` from outside, not obj)

// Normal function → "this depends on the caller".
// Arrow function → "this depends on where it was written".


// *** That's why we use this in normal function, not in arrow function




const myObject = {
  name: "Object Scope",
  myMethod: function() {
    const arrowFunc = () => {
      console.log(this.name); // 'this' refers to myObject
    };
    arrowFunc();
  },
  anotherArrowMethod: () => {
    console.log(this); // 'this' refers to the global object (window in browsers)
  }
};

// myObject.myMethod(); // Output: Object Scope
// myObject.anotherArrowMethod(); // Output: Window (or global object in Node.js)







// 1. Arrow functions **don’t create their own `this`**.  
// 2. They capture `this` from their **defining scope**.  
// 3. That’s why:  
//    - Inside **normal methods**, arrows point to the object.  
//    - Inside **constructors/classes**, arrows point to the instance.  
//    - Inside **object methods defined as arrows**, arrows point to global/undefined, **not the object**.  
// 4. Nested arrows just keep capturing the same `this` from above. 