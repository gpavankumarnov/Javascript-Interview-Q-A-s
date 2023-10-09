const arrayVal = [2,5,9,4,6,7]

const countArrayVal = (arrayVal) => {
   return arrayVal.reduce((prev, curr) => prev+curr)
}

console.log(countArrayVal(arrayVal));