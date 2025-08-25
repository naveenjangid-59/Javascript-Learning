// comparision thing is normal when same data type are compared
// problem is when you compare two different data types
// in that case JS converts one data type to another data type and then compares
// this is called type coercion



console. log (null > 0);
console. log(null == 0) ;
console. log (null >= 0) ;  // true
/*
the reason is that an equality check (==) and comparisons (>, <, >=, <=) work differently.
Comparisons convert null to a number, treating it as 0.
That's why null >= 0 is true and null > 0 is false.
*/

console.log(undefined >= 0); // false 


//strict check
console.log("3"==3);  // true
console.log("3"===3); // false



//  NOTE : AVOID THIS TYPE OF COMPARISIONS IN ORDER TO WRITE CLEAN CODE