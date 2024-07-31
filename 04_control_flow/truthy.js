const userEmail = []

if (userEmail) {
  console.log('You are signed in')
} else {
    console.log('Please sign in')
}



const emptyObj = {'test': 'test'};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}


const iceTeaPrice = 10;
iceTeaPrice < 8 ? console.log('Too expensive') : console.log('Buy it');