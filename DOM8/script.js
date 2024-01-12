let ulList = document.querySelector('ul')
let inputCity = document.querySelector('input')
let btnA = document.querySelector("#btn")
console.log(ulList)
console.log(inputCity)
console.log(btnA)

btnA.addEventListener('click',function(){
    let newCity = inputCity.value
    let newEl = document.createElement('li')
    newEl.textContent = newCity
    let newbtn = document.createElement('button')
    newbtn.textContent="Up"
    newEl.appendChild(newbtn)
    let newbtn2 = document.createElement('button')
    newbtn2.textContent="Down"
    newEl.appendChild(newbtn2)
    let newbtn3 = document.createElement('button')
    newbtn3.textContent="Remove"
    newEl.appendChild(newbtn3)
    ulList.appendChild(newEl)
    inputCity.value=""
})