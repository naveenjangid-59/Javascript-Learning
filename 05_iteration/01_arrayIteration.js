// for-in  for-of
let myArr = [10, 20, 30, 40, 50];

// forof loop
    // used for iterating over iterable objects (arrays, strings, maps, sets, etc.)
    // doesn't work with objects

for (const [idx,val] in myArr) {
    console.log(idx , elem);
}

// forin loop
    // used for iterating over enumerable properties of an object
    // works with objects
    // enumerates means it gives the keys of the object