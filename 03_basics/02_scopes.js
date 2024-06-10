let a = 10
const b = 20
var c = 30

if (true) {
  let a = 40
  const b = 50
  var c = 60

  console.log(a, b, c) // 40 50 60
}

console.log(a, b, c) // 10 20 60