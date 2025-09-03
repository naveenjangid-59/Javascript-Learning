// for-in  for-of
let myArr = [10, 20, 30, 40, 50];
// for-of loop : array string maps 
// for-in loop : best for iterate over Objects 




// forEach loop : 
// callback function ka naam nahi hota
// 1.
const coding = ["js", "ruby", "java", "python", "срр"]
coding.forEach((item)=>{
    console.log(item);
})
// 2.
coding.forEach(function (item){
    console.log(item);
})
//3.
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)



// what parameters does a forEach have : item index arr(full array access)
coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

// for each doesn't return anything
const values = coding.forEach((item) => {
    console.log(item);
    return item
})
console.log(values)  // doesn't return anything : Gives undefined






