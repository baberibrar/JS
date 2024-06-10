function sayMyName (name) {
  console.log('Hello ' + name)
}

sayMyName('John') // Hello John

function loginUserMessage(userName){
    if(!userName){
        console.log('Please provide a username')
        return
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage("")) // John just logged in

const user = {
    userName: "John",
    price: 100,
}

function purchaseItem(anyobject){
    return `${anyobject.userName} purchased an item worth ${anyobject.price}$`
}

console.log(purchaseItem(user)) // John purchased an item worth 100