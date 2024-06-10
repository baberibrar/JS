const tinderUser = {}

tinderUser.id = 5566
tinderUser.name = 'John'
tinderUser.age = 30
tinderUser.location = 'USA'
tinderUser.bio = 'I like long walks on the beach'
tinderUser.interests = ['beach', 'surfing', 'swimming']
tinderUser.isLoggedIn = true


// console.log(tinderUser)

const regularUser = {
    email: 'example@exmple.com',
    fullName: {
        userFullName: {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}

console.log(regularUser.fullName.userFullName) // John

const obj1 = {1: 'one', 2: 'two', 3: 'three'}
const obj2 = {one: 1, two: 2, three: 3}

const obj3 = Object.assign(obj1, obj2)
console.log(obj1) // { '1': 'one', '2': 'two', '3': 'three', one: 1, two: 2, three: 3 }


const course = {
    name: 'JavaScript',
    duration: '3 months',
    topics: ['variables', 'loops', 'functions', 'objects', 'arrays']
}

const {name, duration, topics} = course

console.log(topics) // JavaScript