let n = 8;

const factorial = (n) => {
    let total = 1;
    for(let fact=n; fact>=1; fact--){
  
    total *=fact
   
    }
    return total
}


console.log(factorial(8));

