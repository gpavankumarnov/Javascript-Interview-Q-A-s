const arr1 = [19,-4, 2, 79, 5, -9]

// const ascresult = arr1.sort((a,b)=> a-b)
// // const descresult = arr1.sort((a,b) => b-a)
// console.log(ascresult)

//ForEach vs For Loop   diff: syntax, foreach on each element, for loop for on every iteration, more control on forloop.
//  console.log(arr1.forEach(e=>e +1));

//removing/ adding
arr1.splice(1,2,5,6)
console.log(arr1)

//picking and bringing
const newArr = arr1.slice(1,4)
console.log(newArr)