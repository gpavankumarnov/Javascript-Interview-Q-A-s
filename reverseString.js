const str = "hi all, very good morning willing to play the games?"

 const reversedStr = str.replace(/[^A-Za-z]/g, " ")
const newArray = reversedStr.split(" ").map(word => word.split("").reverse().join(""));
console.log(newArray)

const finalString = newArray.join(" ");

console.log(finalString);



