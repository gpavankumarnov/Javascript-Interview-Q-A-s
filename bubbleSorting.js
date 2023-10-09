
/**
const sortingArr = [2,5,8,3,7,1]

// [2,5,8,3,7,1]
// [2,5,8,3,7,1]
// [2,5,3,8,7,1]
// [2,5,3,7,8,1]
// [2,5,3,7,1,8]


const bubbleSort = (arr) => {
    let repeatVal = false
    while (!repeatVal){
        repeatVal = true
        for (let index = 1; index < arr.length; index++) {
           if(arr[index - 1] > arr[index]){
repeatVal = false
let temp = arr[index - 1]
arr[index - 1] = arr[index]
arr[index] = temp

           }
            
        }
    }
    return arr
}

console.log(bubbleSort(sortingArr));
**/

///////////////////////////////////////////////////////


const str = "zaasfweqrouoicxzvjlmmknkniqwerpopzxcvdfaa"

//Method1:   
/**

//we have sort method.

const splitStr = str.split('');

//sort method usage()
const newArr = splitStr.sort();

//log the results
console.log(newArr);
*/



let arr = [4,-1,34,9,-9,103]

const sorting = (array) => {
    for(let i=0; i<array.length; i++){
console.log("i value is", i);
//this for loop only runs for 6times. each time it iterates and finally puts the biggest value at it last side.
let temp;
   for(let j=i+1; j<array.length; j++){
    let temp = arr[i];
    if(arr[i] > arr[j]){
       
        arr[i] = arr[j]
        arr[j] = temp
    }
   }



    }
    return array;
}


console.log(sorting(arr))