let promiseResult = new Promise((resolve, reject)=>{
let a = false;

if(a){
    resolve(`a value is ${a}`)
}else{
    reject(`a value is ${a}`)
}
})


promiseResult.then((mes) => console.log(mes)).catch((err)=> console.log(err))