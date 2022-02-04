let instructor = {
    name: "clara",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3]
}

console.log(Object.keys(instructor));

console.log(Object.entries(instructor));

for (let i = 0; i < Object.entries(instructor).length; i++) {
    console.log('key: ' + Object.entries(instructor)[i][0] + ' value: ' + Object.entries(instructor)[i][1])

}

console.log(instructor.hasOwnProperty('name'));
