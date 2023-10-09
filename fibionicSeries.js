const fibionic = [0, 1, 1, 2, 3, 5, 8, 13, 21]

const task = () => {

    //userinput
n=10;
let actual=0;
const fibionicSeries = [0,1];



for(let i=2; i<n; i++){
actual = fibionicSeries[i-1] + fibionicSeries[i-2]
 fibionicSeries.push(actual)
}
return fibionicSeries
}


console.log(task())


//2. approach.
const secondApproach = () => {

    let a=0; b=1; actualVal=0;
    const fibionicSeries = [0,1];
    for(let i=0; i<n; i++){
        //actualval = 0+1
        actualVal = a+b;
        a = b;
        b = actualVal
fibionicSeries.push(actualVal)
    }
    return fibionicSeries
}

console.log(secondApproach())