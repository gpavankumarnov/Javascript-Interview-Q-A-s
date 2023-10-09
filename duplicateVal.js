const arr = [2,5,3,7,9,5,2,6,4,7]


//create a new array and push the values
// each time complete scan the array to verify there is not repeating the number.
//if not repeated then add otherwise then repeat
let newArr = []
for (let i = 0; i < arr.length; i++) {
    
    if(!newArr.includes(arr[i])){
newArr.push(arr[i])
    }else{
console.log(arr[i])
    }
   
}
return console.log(`final array is ${newArr}`)
