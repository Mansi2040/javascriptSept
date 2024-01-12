let a = 10
let b = ``
let c = {}
let d = []

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)

// object literal

let studentOne = {
    firstName : "Mansi",
    lastName : "Gurnule",
    rollNum : 345,
    age : 19,
    nationality : "indian"
}
console.log(studentOne)

let studentTwo = {
    firstName : "Chikuu",
    lastName : "Lade",
    rollNum : 346,
    age : 23,
    nationality : "indian"
}
console.log(studentTwo)

// Setting object property outside of the class

class Student {
    firstName
    lastName
    age
    rollNum
    nationality
}

let mansi = new Student()
mansi.firstName = "Mansuu"
mansi.lastName = "lade"
mansi.age = 19
mansi.rollNum = 111
mansi.nationality = "indian"
console.log(mansi)

// 2. class by using constructor

class Person {
    constructor(fn,ln,ag,rn,nat){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNum = rn
        this.nationality = nat 
    }
}

let raj = new Person ("raj","rao",15,879,"indian")
console.log(raj)

// 3. by using function

class Person2 {
    setFirstnm(fn){
        this.Firstnm = fn
    }
    setLastnm(ln){
        this.Lastnm = ln
    }
    setAge(ag){
        this.Age = ag
    }
}

let prem = new Person2()
console.log(prem)
prem.setFirstnm("prem")
prem.setLastnm("chopda")
prem.setAge(34)
console.log(prem)