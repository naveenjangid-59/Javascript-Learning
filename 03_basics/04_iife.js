// (IIFE) - Immediately Invoked Function Expressions


// Used for database connnection and all 
// But we can do like this also 
function chai(){
    console.log(`DB CONNECTED`);
}
chai();
// why do we need IIFE then??
// Another Usecase , to don't let out variables pollute  *******INTERVIEW*******
(function chai2(){
    console.log(`DB CONNECTED`);
})()

// ()()


// Q-1 => how does IIFE prevent pollution
var x = 10;   // global variable
var y = 20;   // global variable
console.log(x + y); // 30
// Here, x and y directly sit in the global scope. If another script also uses x or y, it may overwrite them → pollution.
// BUt in case of IIFE
(function () {
    var x = 10;  // local to IIFE
    var y = 20;  // local to IIFE
    console.log(x + y); // 30
})();
// Now, x and y exist only inside the IIFE’s private scope.
// They are not accessible outside → no interference with other global variables.


// Q.2 : can't these standard standalone functions do this
// asn : NO
function myFunc() {
    var x = 10;
    var y = 20;
    console.log(x + y);
}

myFunc();   
//normal functions can also create scope. But the difference is
// the function sits in global scope with name myFunc. That itself is a kind of pollution if you only wanted temporary code.
// perfect EXAMPLE : DATABASE CONNECTION *********





// can arrow functions create problem in IIFEs -- NO



// Named IIFE
(function chai(){
    // named IIFE
    console. log('DB CONNECTED3') ;
    }
)();

((name) => {
    console.log(`DB CONNECTED FOUR ${name}`); 
    }
)('Naveen');
