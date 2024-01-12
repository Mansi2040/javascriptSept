// String Concatination

let fn = "mansi"
console.log(typeof fn)

let ln = "gurnule"
console.log(fn + ln)

// string + string ===> string
// string + number ===> string
// number + string ===> string
// number + number ===> number

// let a = 10
// let b = "ram"
// let c = 30

let a = 10, b = "ram", c = 30
console.log(a + b) // 10ram
console.log(a + c + b) // 40ram
console.log(b + c + a) //ram3010

let fn1 = "Chiku", ln1 = "Lade"
console.log("My first name is " + fn1 + " and my last name is " + ln1)

console.log(`My first name is ${fn} and my last name is ${ln1}`)

let city = "Nashik"
// let str= ""
// for(let i = 0; i < city.length;i++)
// {
//     str=city[i]+str 
// N + "" == N
// a + N == aN
// s + aN == saN
// h + saN == hsaN
// i + hsaN == ihsaN
// k + ihsaN == kihsaN
// }
// console.log(str)

let str = ""
for (let i = 0; i < city.length; i++) {
    str = str + city[i]
    // "" + N = N
    // N + a == Na
    // Na + s == Nas
    // Nas + h == Nash
    // Nash + i == Nashi
    // Nashi + k == Nashik
}
console.log(str)

// method chaining 
let city1 = "Nashik"
console.log(city1.split("").reverse().join("").toUpperCase())
console.log(city1.split("").join("").toUpperCase())
console.log(city1.toUpperCase())

// string ===> Object ===> method / property
let firstname = "shivani"
console.log(firstname.length)

// 1. toUpperCase()
console.log(firstname.toUpperCase()) // string ==> SHIVANI

// 2. toLowerCase()
let cityp = "PUNE"
console.log(cityp.toLowerCase()) // string ==> pune
let c1 = cityp.toLocaleLowerCase()
console.log(c1)

// 3. includes()
console.log(cityp.includes("U")) // boolean ==> true / false

// 4. indexOf()
console.log(cityp.indexOf("E")) // number ==> 3 / -1

// 5. startsWith()
console.log(cityp.startsWith("PU")) // boolean ==> true / false

// 6. endsWith()
console.log(cityp.endsWith("NE")) // boolean ==> true / false

// 7. trim()
let bank = " SBI "
console.log(bank.length) // 5
console.log(bank.trim().length) // 3

// 8. trimStart()
let fruit = " Mango"
console.log(fruit.length) // 6
console.log(fruit.trimStart().length) // 5

// 9. trimEnd()
let nm = "massu "
console.log(nm.length) // 6
console.log(nm.trimEnd().length) // 5

// 10. slice()
let fn2 = "Mansi"
// 0  1  2  3  4
// M  a  n  s  i
//-5 -4 -3 -2 -1

console.log(fn2.slice(1)) // ansi
console.log(fn2.slice(-3)) // nsi
console.log(fn2.slice(-4,-1)) // ans
console.log(fn2.slice(0,3)) // Man
console.log(fn2.slice(-2,-5)) //(  ) ==> blank string

// 11. splite()
let fn3 = "Mansi A. Lade"
console.log(fn3.split("")) // array ==> ['M', 'a', 'n', 's', 'i', ' ', 'A', '.', ' ', 'L', 'a', 'd', 'e']
console.log(fn3.split(".")) // [ 'Mansi A', ' Lade' ]
console.log(fn3.split("n")) // [ 'Ma', 'si A. Lade' ]
console.log(fn3.split("a")) // [ 'M', 'nsi A. L', 'de' ]

// 12. charAt()
let nm1 = "Ankush"
console.log(typeof nm1.charAt(3)) // string ==> u
console.log(nm1.charAt(8)) // (   ) ==> blank string
// let a1 = nm1.charAt(3)
// console.log(typeof a1) // string

// 13. charCodeAt()
console.log(nm1.charCodeAt(0)) // 65 ASCI calue
console.log(fn3.charCodeAt(0)) // 77
console.log(nm1.charCodeAt(8)) // NaN