const name = "Baber"
const repoCount = 22

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}.`)

const fullName = new String("Baber Ibrar")
console.log(fullName)

console.log(fullName.length)

console.log(fullName.charAt(2))
console.log(fullName.indexOf('b'))

const newString = fullName.substring(0, 5)
console.log(newString)


/**
 * Represents a substring of the fullName string.
 *
 * @type {string}
 */
const anotherString = fullName.slice(-12, 5)
console.log(anotherString)

const newStringOne = "   baber  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://baber.me/baber%20ibrar"
console.log(url.replace('%20', "-"))