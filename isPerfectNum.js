






const isPerfectNum = (inputNum) => {

    let val = 0

    for (let i = 1; i < inputNum; i++) {
    
        if(inputNum % i === 0) {
            console.log("factors are", i)
            val = val + i
        }
        
    }
    return val === inputNum ? true : false

}


console.log(isPerfectNum(28))