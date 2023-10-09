const arr = [null, 7,3,9, undefined, , 10]


const filteredArr = arr.filter(ele => {
if(ele !== null && ele !== undefined && ele !== ''){
    console.log(ele);
}
})