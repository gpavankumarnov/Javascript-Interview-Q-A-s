const input = [1,2,3,4,5]

const minMax = () => {
    let countA, countB;
   countA =  input.slice(0, 4).reduce((prev, curr) => {
    return prev+curr
   })
   countB =  input.slice(1, 5).reduce((prev, curr) => {
    return prev+curr
   })
   console.log(`[${countA} ${countB}]`);
}

minMax()