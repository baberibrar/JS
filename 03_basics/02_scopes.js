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


function one(){
  const userName = "baber"

  function two(){
    const webSite = "baber.com"
    console.log(userName)
  }
  // console.log(webSite)

  two()
}

one()


if (true){
  const userName = 'baber'
  if (userName === "baber") {
    const webSite = "baber.com"
    console.log(userName + webSite)
  }
}

function addone(num){
  const result = num + 1
  console.log(result)
}

addone(5)


const addTwo = function(num){
  return num + 2
}
addTwo(5)