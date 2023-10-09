
//store each value
//compare each with stored
//same then count else not count

const candlesTask = (arr) =>{
  let storedValue =1;
  let count = 1;
arr.forEach(element => {
  
    if(element>storedValue){
      count = 1;
      storedValue = element
    }
    else if(element === storedValue){
      count++
    }
    else{
     
    }
  });
  return console.log(count)
}

candlesTask([18, 90 ,90, 13, 90 ,75, 90, 8, 90, 43])