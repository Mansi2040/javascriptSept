// loop ==> repative operation perform based on condition

// for loop
// while loop 
// do while loop

// Syntax 

// for(Intialization;condition check; increment/decrement){
//     statement
// }

// 1 - 5
// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// 0 - 10
// for(i = 0; i <= 10; i++){
//     console.log(i)
// }

// welcome ==> 5 times

// for(let i = 1; i <= 5; i++){
//     console.log("Welcome "+i)
// }

// forward loop ===> 1 - 5
// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }

// reverse loop
// 5 -0 
// for(let i = 5; i >= 0; i--){
//     console.log(i)
// }

// table of 5

// for(let i = 5; i <= 50 ; i = i+5){
//     console.log(i)
// }

// reverse table of 5

// for(let i = 50 ; i >= 5; i = i-5){
//     console.log(i)
// }

// let sum = 5

// for(let i = 0; i <= 5; i++){
//    // console.log(i)
//     sum = sum + i
// }
// console.log(sum)

// while loop

//Syntax

// Intialization
// while(condition){
//     Statement 
//     increment/decrement
// }

// 1 - 5

// let i = 0
// while (i <= 5) {
//     console.log(i)
//     i++
// }

// 5 - 0

// let i = 5
// while (i >= 0) {
//     console.log(i)
//     i--
// }

// table of 8

// let i = 8
// while (i <= 80) {
//     console.log(i)
//     i = i + 8
// }

// reverse table of 2

// let i = 20
// while (i >= 2) {
//     console.log (i)
//     i = i - 2
// }

// break

// 1 - 5 after 3 come outside of loop

// let i = 1
// while(i <= 5){
//     if (i == 3) {
//         break
//     }
//     console.log(i)
//     i++
// }

// let i = 1
// while (i <= 5) {
//     console.log(i)
//     i++
//     if (i == 3) {
//         break
//     }
//    // i++
// }

// continue

// let i = 1
// while (i <= 5) {
//     if (i == 3) {
//         continue
//     }
//     console.log(i)
//     i++
// }

let i = 1
while (i <= 5) { 
    if (i == 3) {
        i++ 
        continue
    }
    console.log(i) 
    i++ 
}