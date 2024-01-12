let headOne = document.querySelector('h1')
let inputText = document.querySelector('input')
let btn = document.querySelector('button')

btn.addEventListener('click',function(){
    let newText = inputText.value
    headOne.textContent=newText
    headOne.style.color=newText
    inputText.value = ""
})