let student = [
    {
        firstName: "Mayuri",
        lastName: "Katwe",
        age: 25,
        city: "Nashik",
        skills: ["Javascript", "cypress", "python", "SQL", "DJANGO"],
        marks: 45 //55
    },
    {
        firstName: "Vaibhav",
        lastName: "Raut",
        age: 12,
        city: "Jalgoan",
        skills: ["SQL", "Selenium"],
        marks: 10 //20
    },
    {
        firstName: "Sweta",
        lastName: "Kulkarni",
        age: 34,
        city: "Sangamner",
        skills: ["Java", "Cypress", "Jmeter", "Manual"],
        marks: 55
    },
    {
        firstName: "Sam",
        lastName: "Jain",
        age: 41,
        city: "Pune",
        skills: ["Java", "Python", "React", "node", "salesforce", "selenium"],
        marks: 30 //40
    },
    {
        firstName: "kumar",
        lastName: "sahu",
        age: 51,
        city: "Pune",
        skills: ["React", "node",'playwrite'],
        marks: 90
    }
]

// marks<50 ==> 10 add ==> marks>50 ==> avg

// step one
let less50 = student.filter(function(el){
    return el.marks < 50
})
console.log(less50)


