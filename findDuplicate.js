const arr = [4,5,7,8,2,4,9,6,7]

const findDuplicates = (arr) => {
    //arr.indexOf(7) =  
    return arr.filter((ele, index, arr) => arr.indexOf(ele) === index)
}

console.log(findDuplicates(arr))