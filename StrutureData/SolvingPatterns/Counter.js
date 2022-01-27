/*
write a function called same, which accepts two arrays. the function should return true if every
value in the array has its corresponding  value squared  in the  second  array. the frenquency of
values must be  the same.

exemples

[1,2,3] [4,1,9] true
[1,2,3] [1,9]  false
[1,2,1] [4,4,1] false
*/

//1SOLUTION
console.log('SOLUTION 1')
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        console.log('value: ', arr1[i], ' index found: ', correctIndex, ' - quadrado: ', arr2[correctIndex], '   - ARRAY: ', arr2);
        arr2.splice(correctIndex, 1)
    }
    return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4])

console.log()
console.log()
console.log('SOLUTION 2') //Dois loops separados sao mais eficitentes
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

same([1, 2, 3, 2, 5, 0], [9, 1, 4, 4, 11, 0])

console.log()
let d = {
    '1': 1,
    '1': 120,
    '2': 0
}
let dd = {}
dd['1'] = (dd['1'] || 0) + 1
dd['1'] = (dd['1'] || 0) + 1


for (k in d) {
    console.log(k)
}