// Array 

let numbers = [0, 1, 2, 3, 4, 5]
console.log(numbers[0])
console.log(numbers[4])

console.log("-----------------------------------")

// program 2

let city = ["pune", "nagpur", "nashik", "ramtek"]
for (let i = 3; i > 0; i--) {    
    // const element = city[i];
    console.log(city[i])

}

console.log("----------------------------------------")

//program 3 ---> property of array

let names = ["mansi", "sneha", "pari", "prince", "rinku"]
console.log(names.length)

console.log("-------------------------------------")

// Methods of an Array

let fruits = ["mango", "grapes", "chikoo"]
for (let i = 0; i < fruits.length; i++) {
    console.log(i)
    console.log(fruits[i])
}

console.log("-------------------------------------")

// push() ---> 
//Action ===> add element at last
//Return ===> New length of array

let country = ["India", "USA", "China", "Japan"]
let q1 = country.push("Russia")
console.log(q1) // 5
console.log(country) // ['India','USA','China','Japan','Russia']

console.log("-------------------------------------")

// unshift() ---> 
// Action ===> add element at first
// Return ===> New length of array

let country2 = ["Nepal", "Japan", "Butan"]
console.log(country2.unshift("India")) // 4
console.log(country2) // ['India','Nepal','Japan','Butan']

console.log("-----------------------------------------")

// pop() --->
// Action ===> remove last element
// Return ===> removed element

let country3 = ["America", "Africa", "Shrilanka"]
console.log(country3.pop()) // Shrilanka
console.log(country3) // ['America','Africa']

console.log("----------------------------------------")

// shift() ---> 
// Action ===> remove first element
// Return ===> Removed element

let country4 = ["America", "Africa", "Shrilanka"]
console.log(country4.shift()) // America
console.log(country4) // ['Africa','Shrilanka']

console.log("-------------------------------------")

// includes() ---> 
// Action ===> search for element
// Return ===> Boolean value

let country5 = ["America", "Africa", "Shrilanka"]
console.log(country5.includes("America")) // True
console.log(country5) // ['America','Africa','Shrilanka]

console.log("----------------------------------------")

// indexOf() ---> 
// Action ===> print index no.
// Return ===> Value of array if present else -1

console.log(village.indexOf("Lohar"))

console.log("---------------------------------------------------------------------------")

let birthyear = [2000, 2001, 2002, 2003, 2004]
let ages = []
for (let i = 0; i < birthyear.length; i++) {
    //console.log(i) 0 , 1 , 2 , 3 , 4
    //console.log(birthyear[i]) // 2000 , 2001 , 2002 , 2003 , 2004
    //console.log(2023 - birthyear[i]) // 23 , 22 , 21 , 20 , 19
    let s = 2023 - birthyear[i]
    ages.push(s)
}

console.log(ages) // [ 23, 22, 21, 20, 19 ]

console.log("----------------------------------------")

let marks = [34, 65, 87, 23, 54]
let above50 = []
for (let i = 0; i < marks.length; i++) {
    //console.log(i) 0 , 1 , 2 , 3 , 4
    //console.log(marks[i]) 34 , 65 , 87 , 23 , 54
    if (marks[i] > 50) {
        above50.push(marks[i])
    }
}

console.log(above50) // [ 65, 87, 54 ]

console.log("------------------------------------------")

// map() --->
// Action ===> perform operation on each element
// Return ===> Array that contains result

let birthyear2 = [2000, 2001, 2002, 2003, 2004]
let ages2 = birthyear2.map(function (el, index, arr) {
    //console.log(el) 2000, 2001, 2002, 2003, 2004
    return 2023 - el
})

console.log(ages2) // [ 23, 22, 21, 20, 19 ]

console.log("---------------------------------------------")

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let tableOf2 = number.map(function (el, index, arr) {
    return el * 2
})

console.log(tableOf2) // [2,4,6,8,10,12,14,16,18,20]

console.log("-----------------------------------------------")

// filter() --->
// Action ===> predicat function one time for each element of an array

let mark = [45,65,58,69,79,82,86]
let above60 = mark.filter(function(el,index,arr){
    return el > 60
})
console.log(above60) // [ 65, 69, 79, 82, 86 ]

console.log("-------------------------------------------------------------")

// reduce() ---> calculate value of each element in an array

let score = [11,22,33]
let total = score.reduce(function (acc,el,index,arr) {
    return acc + el
},0)
console.log(total) // 66

console.log("-----------------------------------------------------")

// foreach() ---> (does not return anything)

let girls = ["Mansi","Sneha","Prince","Pari","Rinku"]
let fullName = girls.forEach(function (el,index,arr) {
    console.log(el+" Gurnule")
})

console.log("-------------------------------------------------------")

// filter() ---> meet the condition specified is a callback function

let ns = [11,22,33,44,55,66]
let nss = ns.filter(function(el,index,arr){
    return el > 50
})
console.log(nss) // [ 55, 66 ]

console.log("-------------------------------------------------------")

// find() ---> only first true value return

let nss1 = ns.find(function (el,index,arr) {
    return el > 30
})
console.log(nss1) // 33

console.log("-----------------------------------------------------")

// findIndex() --->

let nss2 = ns.findIndex(function (el,index,arr) {
    return el > 30
})
console.log(nss2) // 2

console.log("------------------------------------------------------")

// every() ---> all is true then true

let m = [11,22,33,44,55,700]
let m1 = m.every(function (el,index,arr) {
    return el < 10
})
console.log(m1)

console.log("------------------------------------------------------")

// some() ---> Any one value true answer is true

let m2 = m.some(function (el,index,arr) {
    return el > 600
})
console.log(m2)

console.log("-----------------------------------------------------")

// reverse() ---> Reverse the element in an array in place

//              0         1        2        3
let city1 = ["Nagpur","Nashik","Ramtek","Butibori"]
//             -4        -3        -2       -1

let city2 = city1.reverse()
console.log(city2)

console.log("---------------------------------------------------------")

// sort() ---> alphabetical order element in an array in place

let city3 = city1.sort()
console.log(city3)

console.log("-----------------------------------------------------------")

// concat() ---> combines two or more arrays

let numA = [11,22,33]
let numB = [44,55,66]
let numD = [77,88,99]

let numC = numA.concat(numB,numD)
console.log(numC)

console.log("-------------------------------------------------------------")

// join() ---> Add all the elements of an array into string

let info = ["Mansi","Gurnule",7507069397]
let full = info.join("-")
console.log(full)

console.log("------------------------------------------------------------")

// flat() ---> concate all array

let state = [["wardha","nagpur"],["jaipur","udaipur"],["banglore","mysore"]]
console.log(state[1][0])
let info1 = state.flat()
console.log(info1)

console.log("-----------------------------------------------------------")

// slice() ---> print element start and end
//                 0        1        2        3     4
let cityNane = ["Nagpur","Wardha","Ramtek","Goa","Umred"]
//                 -5       -4       -3       -2    -1
let cn = cityNane.slice(1,3)
let cn1 = cityNane.slice(2)
let cn2 = cityNane.slice(2,-1)
console.log(cn)
console.log(cn1)
console.log(cn2)

console.log("----------------------------------------------------------------------")

// splice() ---> remove the element

let num = [11,22,33,44]
console.log(num.splice(1,2))
console.log(num)

console.log("-----------------------------------------------------------------------")

// at() ---> print element

let village = ["mondha","deoli","lohar","jhasi"]
let vill = village.at(1)
console.log(vill) // deoli


