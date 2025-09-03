myNums = [1,2,3,4,5,6,7,8,9,10]
// filter Returns
const filter_nums = myNums.filter((num)=>{
    return num>5
})
console.log(filter_nums)



const newNums = []
myNums.forEach(element => {
    if(element>5) newNums.push(element);
});
console.log(newNums)





// Map : return automatically
const newNums2 = myNums.map((item)=>{
    return item+10
})
console.log(newNums2)




// chaining : first chain result passed into chain two 








// Reduce : user supplied reducer
// accumulator
