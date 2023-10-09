

const countLetterRepeat = (str) => {

    let obj= {}
const newStr = str.split('').forEach(letter => {
    if(letter in obj){
        obj[letter]++
    }
    else{
        obj[letter]=1
    }
});
return obj
}

console.log(countLetterRepeat('Arjun kumar'));