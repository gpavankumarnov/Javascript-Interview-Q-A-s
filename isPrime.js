// const numbers = [2,5,6,8,7,9];

// const isPrime = (numbers) => {

//     for(let num=6; num<=numbers.length; num++){
//         if(numbers[num]<2){
//             return `${num} is not a prime number`
//         }

//         if(numbers[num] % num === 0){
//             return `${num} is not a prime number`
//         }else{
//             return `${num} is a prime number`
//         }

//     }

// }

// console.log(isPrime([2,5,6,8,7,9]))

const isPrime = (inputNum) => {
  let result = false;
  if (inputNum < 1) return result;
  for (let i = 2; i < inputNum; i++) {
    if (inputNum % i === 0) {
      console.log(i);
      return result;
    }
  }
  return true;
};

console.log(isPrime(7));
