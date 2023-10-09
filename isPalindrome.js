const str = '0_0 (: /-\ :) 0–0'
const cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
///[^a-zA-Z0-9]/g,  this command removes all non alpha numberic values like spaces, exclaimation marks, commas, etc,
console.log(cleanedString)
const isPalindrome = cleanedString === cleanedString.split('').reverse().join('')
console.log(isPalindrome);


