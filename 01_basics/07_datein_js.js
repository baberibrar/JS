let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(typeof(myDate))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth)

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))