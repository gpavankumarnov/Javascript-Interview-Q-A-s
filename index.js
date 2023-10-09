function Student(name, age, city) {
    this.name = name,
        this.age = age,
        this.city = function () {
            console.log(`${name} is belong to ${city}`);
        }
}

const P1 = new Student('Ashish', 25, 'Bihar')
const P2 = new Student('Tusharkant', 27, 'Orissa')
const P3 = new Student('Rajesh', 26, 'Bangalore')


P3.city();



//Modern ES6 Approach
//constructor is used to initialize the object properties and this will be called when object is created from the class.
class Person {
    constructor(name, id, location) {
        this.name = name,
            this.id = id,
            this.location = function () {
                console.log(`${name} is from ${location}`)
            }
        console.log('constructor called')
    }



}
const person1 = new Person('Ashish', 2, 'Chennai')
const person2 = new Person('Rakesh', 4, 'Bangalore')
const person3 = new Person('Vishwas', 5, 'Ballari')
const person4 = new Person('chandan', 7, 'Anantapur')
person1.location();


//Pool for postgresql database

class Pool {
    constructor(host, username, pwd) {
        this.host = host,
            this.username = username,
            this.pwd = pwd
    }
}

const pool = new Pool({host:'username'})