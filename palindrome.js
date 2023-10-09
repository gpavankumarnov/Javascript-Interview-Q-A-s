const isPalindrome = (str) => {
   const newStr =  str.split('').reverse().join('')
return str === newStr ? true : false
}


console.log(isPalindrome('madamlps'))