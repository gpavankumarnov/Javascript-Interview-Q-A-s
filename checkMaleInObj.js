const data = 
`
[
{
  "name" : "Pavan",
  "age": 30,
  "place": "bangalore",
  "gender":"male"
},
{
  "name" : "Ajith",
  "age": 28,
  "place": "Mysore",
  "gender":"female"
},
{
  "name" : "RamaKrishna",
  "age": 28,
  "place": "Hyd",
  "gender":"male"
}





]
`





const file = `
[
  {
    "name":"pavan",
    "Age": 30
  },
  {
    "name":"Kumar",
    "Age": 40
    "items" : ["cabbage", "carrot", "cucumber"],
    "address" : {
      "street" : "3rd cross",
      "city" : "delhi"
      "isWork" : true
    }
  }
]

`






const data1 = JSON.parse(data);

// const data2 = console.log(JSON.stringify(data1))



const newArr = data1.filter(ele => ele.gender === "male")



console.log(newArr);

