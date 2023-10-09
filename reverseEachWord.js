const str = "city is Bangalore"

//start splitting string
//from array -> iterate each word in a sentence
// reverse each word 
//finally join whole words.


const splittedString = str.split(" ")

const finalStr = splittedString.map(ele => ele.split("").reverse().join(" "))

console.log( finalStr);


    

