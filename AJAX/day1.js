// AJAX ==> Asychrones javascript as XML

// Sychrones ==> line to line

// program 1

function add1(){
   console.log("I am add1")
}

function add2(){
    console.log("I am add2")
}

// add2()
// add1()

// o/p
// I am add2
// I am add1

// Program 2

function add3(){
    setTimeout(function(){
        console.log("I am add3")
    },2000)
}

function add4(){
    console.log("I am add4")
}

// add3()
// add4()

// o/p
// I am add4
// I am add3