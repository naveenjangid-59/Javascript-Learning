const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// push() - push array as a element
//        - make changes in original array
marvel_heros.push(dc_heros)
console.log("Push : ", marvel_heros);



// concat()  - cancat two arrays and return a new array  
//           - without modifying existing array
const marvel_heros2 = ["thor", "Ironman", "spiderman"]
const dc_heros2 = ["superman", "flash", "batman"]
const newArr = marvel_heros2.concat(dc_heros2)
console.log("Concat : ", newArr);




// spread operator [...]
const another_new_array = [...marvel_heros2, ...dc_heros2]
console.log("Spread Operator : ",another_new_array);



// flat() - to flatten an array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // Infinity is Depth
console.log("flat() : ",real_another_array);




//
console.log("isArray : ",Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting - you have to specify keys or values to be taken into arrays 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
console.log(Array.from(score1,score2,score3)); // error : as parameter should be iterable in the case of .from()

