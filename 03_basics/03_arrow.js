const user = {
    userName: "baber",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`)
    }
}

user.welcomeMessage()
user.userName = "X"
user.welcomeMessage()

const chai = () => {
    let userName = "test123"
    console.log(`${userName}`)
}

chai()

const addTwo = (a, b) => (a + b)
console.log(addTwo(1, 2))

const myArray = [2, 3, 4, 5, 6, 7]

myArray.forEach((element) => {
    console.log(element)
})