
//Pavan   -> [P,A,V,A,N] -> [n,a,v,a,p] -> navap
const checkPalindrome = (str) => {
  const reverseStr =  str.split("").reverse().join("");
  return str === reverseStr ? true : false

}

console.log(checkPalindrome('poop'));