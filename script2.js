// let x = 10
// console.log(x)

// x = 30
// console.log(x)

// const y = 24
// console.log(y)

// y = 190
// console.log(y)

// operator

// Arithmetic operator (+ , - , / , * , %)

// let a = 10
// let b = 5

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// function

// let j = 20
// let k = 10
function Calculator(j,k) {
    console.log(j+k)
    console.log(j-k)
    console.log(j*k)
    console.log(j/k)
    console.log(j%k)
}
Calculator(20,10)
Calculator(10,5)

// Function without parameter and without return type

function A(){
    console.log(20+5)
}
A()
A()

// function with parameter and without return type

function B(a,b){
    console.log(a+b)
}
B(23,7)
B(12,87)

// Function with parameter and with return type

function C(a,b) {
    return(a+b)
    
}
let sum = C(12,5)
console.log(sum)
console.log(sum+3)