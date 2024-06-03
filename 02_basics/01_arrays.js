const myArr = [1, 2, 3, 4, 5];
console.log([myArr[1]]);

const myHobbies = ['coding', 'reading', 'writing', 'travelling'];

// Array Methods

// 1. push() - Adds an element to the end of an array
myHobbies.push('cooking');
console.log(myHobbies);

// 2. pop() - Removes the last element from an array
myHobbies.pop();
console.log(myHobbies);

// 3. unshift() - Adds an element to the beginning of an array
myHobbies.unshift('cooking');
console.log(myHobbies);

// 4. shift() - Removes the first element from an array
myHobbies.shift();
console.log(myHobbies);

// 5. splice() - Adds or removes elements from an array
myHobbies.splice(1, 1, 'cooking');
console.log(myHobbies);

// 6. slice() - Returns a portion of an array
const newHobbies = myHobbies.slice(1, 3);
console.log(newHobbies);

// 7. concat() - Merges two or more arrays
const hobbies = myHobbies.concat(newHobbies);
console.log(hobbies);
