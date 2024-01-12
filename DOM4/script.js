let ulList = document.querySelector('ol')
let inputText = document.querySelector('input')
let btn = document.querySelector('button')
console.log(ulList)
console.log(inputText)
console.log(btn)

btn.addEventListener('click', function () {
    let newfru = inputText.value
    let newli = document.createElement('li')
    newli.textContent = newfru
    ulList.appendChild(newli)
    inputText.value = ""
})
