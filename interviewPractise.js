const numbers = [2,5,6,8,7,9]


//Sum up
//1.reduce

// const total = numbers.reduce((accumulator, currentValue)=>accumulator+currentValue , 0);

// console.log(total)

//2. for loop

// const total = ()=>{
// let sum=0;
// for(let number=0; number<numbers.length; number++){
// sum = sum + numbers[number];
// }
// return sum;
// }

// console.log(total())


//3. using while loop

const total = () => {
let sum = 0;
let number=0;
while(number<numbers.length){
    sum=sum+numbers[number]
    number++
}

return sum;
}

console.log(total());