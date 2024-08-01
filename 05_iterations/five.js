const programmingLanguages = ['javascript', 'python', 'ruby', 'php', 'java', 'c++', 'c#', 'go', 'swift', 'kotlin'];

// for (const programmingLanguagesKey in programmingLanguages) {
//     console.log(programmingLanguages[programmingLanguagesKey]);
// }
programmingLanguages.forEach((language) => {
    console.log(language);
}
);

console.log(programmingLanguages.length);

programmingLanguages.forEach(function (value, index) {
    console.log(value, index);
}
);

function printLanguages(language, index) {
    console.log(language, index);
}

programmingLanguages.forEach(printLanguages);

const myCoding = [
    { name: 'javascript', type: 'interpreted' },
    { name: 'python', type: 'interpreted' },
    { name: 'ruby', type: 'interpreted' },
    { name: 'php', type: 'interpreted' },
    { name: 'java', type: 'compiled' },
    { name: 'c++', type: 'compiled' },
    { name: 'c#', type: 'compiled' },
    { name: 'go', type: 'compiled' },
    { name: 'swift', type: 'compiled' },
    { name: 'kotlin', type: 'compiled' }
];

myCoding.forEach((language) => {
    console.log(language.name, language.type);
}
);