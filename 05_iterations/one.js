array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


for (let index = 0; index < array.length; index++) {
    if (array[index] === 5) {
        console.log('Found 5');
        break;
    }
    console.log(array[index]);
}