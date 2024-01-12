// Arithmetic Operetor ==> (+ , - , / , * , % )
// Conditional Operator ==> (< , > , <= , >= , == , != , === , !== )
// Logical Operator ==> ( && , || , !)

// Arithmetic Operator 

let a = 10
let b = 5

console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)
console.log(a % b)

// Conditional Operator

console.log(5 > 5) // true
console.log(8 < 4) // false
console.log(8 == 8) // true
console.log(4 != 4) // false
console.log(5 >= 5) // true
console.log(4 <= 8) // true
console.log("8" === "8") // true
console.log("6" === 6) // false
console.log("5" == 5) // true
console.log("6" !== 6) // true

// != , == ---> check value 5 , "5" ---> dynamic comparision operator
// !== , === ---> check values and datatype ---> strict comparision operetor

// Logical Operator ====> && , || , !

// AND ---> &&

// true  && true  ===> true
// true  && false ===> false
// false && true  ===> false
// false && false ===> false

console.log(5 > 4 && 1 < 2) // true
console.log(6 == 6 && 4 > 8) // false
console.log(4 != 4 && 5 != 3) // false
console.log(3 == 5 && 4 == 7) // false

// OR ---> ||

// true  || true  ===> true
// true  || false ===> true
// false || true  ===> true
// false || false ===> false

console.log(5 > 4 || 1 < 2) // true
console.log(6 == 6 || 4 > 8) // true
console.log(4 != 4 || 5 != 3) // true
console.log(3 == 5 || 4 == 7) // false

// NOT ---> !

// true ==> !true  ====> false
//false ==> !false ====> true

console.log(!(12>100))  // true

console.log(!(0>-12 || 23!=='34'))  //==>   true || true  ==> !true  => false

// console.log(!(34!=='34' && 45<='45') )//  true  && True ==> !true   => false

// console.log(45 <= '45') //true