let olList = document.querySelector('ol')
let newNm = document.querySelector('input')
let btn = document.querySelector('button')
console.log(olList)
console.log(newNm)
console.log(btn)

btn.addEventListener('click',function(){
    let newtext = newNm.value
    let el = document.createElement('li')
    el.textContent = newtext
    olList.appendChild(el)
    newNm.value=""
})