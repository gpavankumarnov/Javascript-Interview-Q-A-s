
const binarySearch = (sortedArr, target) => {
    let leftIndex = 0, rightIndex = sortedArr.length - 1;
while(leftIndex <= rightIndex){
let middle = Math.floor((leftIndex + rightIndex) / 2)
console.log("middle ", middle)
if(sortedArr[middle] === target){
    return middle
}else if(target < sortedArr[middle]){
    rightIndex = middle - 1
}else {
    leftIndex = middle+1
}
}
return -1
}


console.log(binarySearch([1,3,5,6,9,14,29,57,89], 5))


