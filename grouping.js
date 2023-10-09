let peopleArr = [
    {name: 'A', age: 10},
    {name: 'B', age: 17},
    {name: 'C', age: 14},
    {name: 'D', age: 10},
];


const groupPeople = (arr) => {
    let resultObj={}

    for (let i = 0; i < peopleArr.length; i++) {
        
        if(resultObj[peopleArr[i].age]){
            console.log("exists" , peopleArr[i])
            resultObj[peopleArr[i].age].push(peopleArr[i].name)
        }else{
            console.log("else", peopleArr[i])
            resultObj[peopleArr[i].age] = [peopleArr[i].name]
        }

        
    }
    return resultObj
}

console.log(groupPeople(peopleArr))