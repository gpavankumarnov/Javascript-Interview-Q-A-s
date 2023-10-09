// const arr = [2,5,3,7,5,8, 'pavan',true,3]

//Steps:
//checking typeOF of a element in an array
//if that relates to Number then its a number else not a number.

const isInteger = (num) => {
    console.log('working');
if(typeof(num) === 'number'){
    return console.log(`the passed number ${num} is an integer`)
}else{
   return console.log(`the passed number ${num} is not an integer`)
}

}
isInteger(50);