let mp = new Map()
console.log(mp)

// set()
mp.set("mansi","firstname")
mp.set(19,"age")
mp.set(true,"isMarried")
//mp.set("roll",345)
console.log(mp)

// retrive value using get()
console.log(mp.get(19))
console.log(mp.get("mansi"))
console.log(mp.get(true))

// 3. has()
console.log(mp.has("mansi"))
console.log(mp.has(true))

// 4. delete()
console.log(mp.delete(19))
console.log(mp)

// 5. clear()
// mp.clear()
// console.log(mp)

// 6. foreach()
mp.forEach(function(value,key){
    console.log(value,key)
})

let mp2 = new Map([
    [1, "admine"],
    [2 , "manager"],
    [3 , "coustemer"]
])

console.log(mp2)

mp2.forEach(function(value,key){
    console.log(value,key)
})