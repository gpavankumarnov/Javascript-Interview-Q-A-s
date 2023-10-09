const capitalFirstStr = (str) => {
   const splittedStr = str.split(" ").map(word => {
    return word.charAt(0).toUpperCase() + word.substring(1)
   })
   return splittedStr.join(" ")
}

console.log(capitalFirstStr('hello friends'))