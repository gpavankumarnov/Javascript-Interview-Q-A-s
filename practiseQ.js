let x=10;

const byValue = (y) => {
    y = 20;
}

byValue(x);
console.log(x);  //10