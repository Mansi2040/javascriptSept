// conditional statements

// if
// if else
// if else if else
// switch()

// Sysntax 

// if(condition)
//{
//     Statement
// }

// if(1 == '1')
// {
//     console.log("hii")
// }

// if(10 > 2)
// {
//     console.log("10 is a greater number")
// }
// else{
//     console.log("False condition")
// }

// ticket
// 1 - 5 ==> 10% discount
// 6 - 10 ==> 20% discount
// > 10 ==> 30% discount

// let tik = 10

// if (tik > 0 && tik <= 5) {
//     console.log("You got 10% discount")
// }
// if (tik > 5 && tik <= 10) {
//     console.log("You got 20% discount")
// }
// if (tik > 10) {
//     console.log("You got 30% discount")
// }

// let Tic = 56
// if (Tic > 0 && Tic <= 5) {
//     console.log("You got 10% discount")
// } else if(Tic > 5 && Tic <= 10){
//     console.log("You got 20% discount")
// } else if (Tic > 10) {
//     console.log("You got 30% discount")
// } else {
//     console.log("Invalid input")
// }

// program 2

// let score = 100
// if (score > 90) {
//     console.log("Best player")
// }
// if (score > 70) {
//     console.log("Better player")
// }
// if (score > 50) {
//     console.log("Good player")
// }

// let score = 100
// if (score > 90) {
//     console.log("Best player")
// }
// else if (score > 70) {
//     console.log("Better player")
// }
// else if (score > 50) {
//     console.log("Good player")
// }
// else{
//     console.log("Please select correct score")
// }

// let a = 1000
// let b = 100

// if (a > b) {
//     console.log("a is greater")
// }
// else if (b > a) {
//     console.log("b is greater")
// } else {
//     console.log("both are equal ")
// }

// let a = 1000 , b = 200 , c = 30

// if (a > b && a > c) {
//     console.log("a is greater")
// } else if (b > a && b > c) {
//     console.log("b is greater")
// } else {
//     console.log("c is greater")
// }

// single condition ===> ternary operator

// let student = 40

// student > 5 ? console.log("class started") : console.log("please wait 2 min")

// switch()

// witgout break

// let day = 4
// switch (day) {
//     case 1 :
//         console.log("Sunday")
//     case 2 :
//         console.log("Monday")
//     case 3 :
//         console.log("Tuesday")
//     case 4 :
//         console.log("Wednasday")
//     case 5 :
//         console.log("Thursday")
//     case 6 :
//         console.log("Friday")
//     case 7 :
//         console.log("Saturday")
// }

// switch with break

// let day = 4
// switch (day) {
//     case 1 :
//         console.log("Sunday")
//         break
//     case 2 :
//         console.log("Monday")
//         break
//     case 3 :
//         console.log("Tuesday")
//         break
//     case 4 :
//         console.log("Wednasday")
//         break
//     case 5 :
//         console.log("Thursday")
//         break
//     case 6 :
//         console.log("Friday")
//         break
//     case 7 :
//         console.log("Saturday")
//         break
// }

// switch with break and default

let day = 14
switch (day) {
    case 1 :
        console.log("Sunday")
        break
    case 2 :
        console.log("Monday")
        break
    case 3 :
        console.log("Tuesday")
        break
    case 4 :
        console.log("Wednasday")
        break
    case 5 :
        console.log("Thursday")
        break
    case 6 :
        console.log("Friday")
        break
    case 7 :
        console.log("Saturday")
        break
    default :
     console.log("Incorrect day")
}

// Switch case

let month = 10
 switch (month) {
    case 3:
    case 4:
    case 5:
    case 6:
    console.log("Summer")
        break;
    case 7:
    case 8:
    case 9:
    case 10:
    console.log("Rainy")
    break;
    case 11:
    case 12:
    case 1:
    case 2:
    console.log("Winter")
    break;
    default:
    console.log("Incorrect month")
        break;
}