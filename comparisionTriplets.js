let a=[17, 28, 30]
let b = [99, 16, 8]


const comparisionTask = (a, b)=>{
   
    let alice=0, bob=0;
    for(let i =0; i<a.length; i++){
        if(a[i] > b[i]){
            alice++
        }
        else if(a[i] === b[i]){
           console.log('neutral')
        }
        else if(a[i] < b[i]){
           bob++ 
        }
    }
    console.log(alice,  bob)
}

comparisionTask(a,b)