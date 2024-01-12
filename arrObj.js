// // array 

// let marks = [22,45,76,98,34,54]
// console.log(typeof marks)

// let obj = {
//     fristname: "Mansi",
//     lastname: "Gurnule",
//     rollno:50,
//     age:19
// }
// console.log(typeof obj)

// let obj2 = ["Mansi","Gurnule",50.19]

// let marks = [22,43,56,78]
// // console.log(marks[1])
// // console.log(marks[0])

// let [m1,m2,m3,m4] = marks
// console.log(m1)
// console.log(m2)
// console.log(m3)
// console.log(m4)

let obj = {
    model:"SUV",
    planeNo:3456,
    color:"red"
}

// destructur
// let {model,planeNo,color} = obj
// console.log(model)
// console.log(planeNo)
// console.log(color)

// alising
// let {model:m,planeNo:pn,color:c} = obj
// console.log(m)
// console.log(pn)
// console.log(c)

// nested array

// let arr = [[12,34,56],[43,56,32,78],[12,34,56,78]]
// console.log(arr[1][3])

// let [[q1,q2,q3],[w1,w2,w3,w4],[e1,e2,e3,e4]] = arr
// console.log(e2)

// nested object 

// let student = {
//     fullname:"Mansi",
//     mark:{
//         math:45,
//         sci:72
//     }
// }
// let {fullname,mark:{math,sci}} = student
// console.log(math)

// let {mark:{sci}} = student
// console.log(sci)

// object inside array 

// let student = [
//     {
//         name:"mansi",
//         roll:45,
//         skill:"js"
//     },
//     {
//         name:"chikuu",
//         roll:46,
//         skill:"paython"
//     }
// ]

// let [{name:n1,roll:r1,skill:s1},{name:n2,roll:r2,skill:s2}] = student
// console.log(r2)
// console.log(n1)


let Person = {
    firstName: "mayuri",
    family: {
        father: "Mahendra",
        mother: "Jaya",
        sister: [
            {
                name1: "Kavari",
                age: 12
            },
            {
                name1: "Reshama",
                age: 20
            },
            {
                name1: "shubhangi",
                age: 32,
                skills: ["HTML,CSS", "JAVASCRIPT"],
                employesDetails: {
                    empID: 2222,
                    salary: 50000
                }
            }

        ]
    }
}

let {family:{sister:[{},{},{employesDetails:{empID}}]}} = Person
console.log(empID)
