const obj = {
    name: '',
    age: 30,
    address: '',
    place:undefined,
    city: null
}
const anotherObj = {}

for (const key in obj) {
    console.log(obj[key]);

   if(obj[key] !== '' && obj[key] !== undefined && obj[key] !== null){
     anotherObj[key] = obj[key]
    
   }
  
}
return console.log(anotherObj)

