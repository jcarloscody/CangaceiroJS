const userName = 'Max';
// userName = 'Maximilian';
let age = 30;

age = 29;

 function add(a: number, b: number) {
   let result;
   result = a + b;
   return result;
}

 if (age > 20) {
   let isOld = true;
   console.log(isOld)
 }



const addd = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add(5, 2));


const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  name: 'Max',
  age2: 30
};

const copiedPerson = { ...person };




const adddd = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addddt = (...numbers: [number, number, number, number]) => {//com tupla
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = adddd(5, 10, 2, 3.7);
console.log(addedNumbers);


const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log('o que sera? ', remainingHobbies)

console.log(hobbies, hobby1, hobby2, remainingHobbies);

const { name: userName2, age2 } = person;

console.log(userName2, age2, person);