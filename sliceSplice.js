

const sliceMethod = (arr)=>{
    const  newSlice = arr.slice(1,2)
    return newSlice
}

console.log(sliceMethod([4,6,5,7]));


const spliceArray = (arr) => {
    const splicedArray = arr.splice(0, 2, 'Pavan', 'Ravi', 7)
    console.log(arr)
    return splicedArray;
}


console.log(spliceArray([4,6,5,7]));