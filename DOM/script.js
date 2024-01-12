// 1. selecting by id name
let byID = document.querySelector('#one')
console.log(byID)

// 2. selecting by class name
let byCls = document.querySelector('.two')
console.log(byCls)

// 3. selecting by common formula
let byCF = document.querySelector('h1[name="text"]')
console.log(byCF)

// 4. selecting by tag name
let byTag = document.querySelector('h1')
console.log(byTag)

byTag.addEventListener('click',function(){
 byTag.textContent="Hello"
})