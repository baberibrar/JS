// const arr = [1, 2, 3, 4, 5];
//
// for (const element of arr) {
//     console.log(element);
// }


const map = new Map([
    ['name', 'John'],
    ['age', 30],
    ['location', 'USA']
]);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

const mapKeys = map.keys();
for (const key of mapKeys) {
    console.log(key);
}