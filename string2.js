// string

let city = "Nagpur"
//city.toUpperCase()
console.log(city.toUpperCase()) // NAGPUR
console.log(city.toLowerCase()) // nagpur
//console.log(city.includes(1))
console.log(city.indexOf(2))

let a = city.indexOf('g')
console.log(a)

let b = city.includes('g')
console.log(b)

let fruit = " Apple "
console.log(fruit.length)

// trim()

//console.log(fruit.trim()) ==> Apple
let s1 = fruit.trim() // "Apple"
console.log(s1.length) // 7
// console.log(s1) // Apple

// trimStart()

let f1 = fruit.trimStart()
console.log(f1) // " Apple"
console.log(f1.length) // 6

// trimEnd()

let f2 = fruit.trimEnd()
console.log(f2) // " Apple"
console.log(f2.length) // 6

// startsWith()

let flora = "mogra"
let f3 = flora.startsWith('mo')
console.log(f3) // true

// endsWith()

let f4 = flora.endsWith('gra')
console.log(f4)

let names = "Shree Ganesh"

//  0   1    2  3  4  5  6  7  8  9   10   11
//  S   h    r  e  e     G  a  n  e   s    h
// -12 -11 -10 -9 -8 -7 -6 -5 -4 -3  -2   -1

let a1 = names.slice(-11,-2)
console.log(a1)

let a2 = names.split(" ")
console.log(a2) // [ 'Shree', 'Ganesh' ]


let cities = "Nagpur Raipur Nashik"
let q1 = cities.split(" ")
console.log(q1)// [ 'Nagpur', 'Raipur', 'Nashik' ]
let q2 = q1.join("_")
console.log(q2) // Nagpur_Raipur_Nashik

let mehh = "Mansi"
let m1 = mehh.charAt(1)
console.log(m1) // a

let m2 = mehh.charCodeAt(2)
console.log(m2) // 110

let city2="Nashik"

// // N    a   s   h   i   k
// // 0    1   2   3   4   5

let d1=city2.charCodeAt(0)
console.log(d1) //N

console.log(city2.charCodeAt(2))

let y3=city2.charCodeAt(20)
console.log(y3)
