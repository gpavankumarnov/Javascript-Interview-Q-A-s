

const duplicateNums = (inputArr) => {

    let duplicateArr = [], uniqueArr = []

    for (let i = 0; i < inputArr.length; i++) {
      
        if(!uniqueArr.includes(inputArr[i])){
            uniqueArr.push(inputArr[i])
        }else{
            duplicateArr.push(inputArr[i])
        }
        
    }

    return uniqueArr


}

console.log(duplicateNums([1,4,5,76,7,8,3,3,8,7,2,9,5]))