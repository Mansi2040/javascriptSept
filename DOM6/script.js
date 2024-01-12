let nmOne = document.querySelector('h1')
let btn = document.querySelector('button')
console.log(nmOne)
console.log(btn)

btn.addEventListener('click',function(){

    nmOne.textContent = nmOne.textContent.toUpperCase()
})