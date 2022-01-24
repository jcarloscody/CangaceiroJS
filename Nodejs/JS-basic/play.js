const summarian = function hello() {//funcao anonima. mais ainda uma funcao nomeada implicitamente pois colocamos numa variavel
    console.log('hello!')
}

const sum = (a, b, c) => { //arrow function: 
    console.log('somado')
    return a + b + c;
}

const sum2 = (a, b, c) => a + b + c;  //só uma linha

const sum3 = a => a + 10; //so um parametro

const sum4 = () => 10;// sem parametro

const sum5 = _ => 20;//sem parametro

console.log(sum5())



//OBJECT
const person = {
    name: "josue",
    age: 25,
    greet: () => {
        console.log(`hi, i am ${this.name}`)
    }
}

const person2 = {
    name: "josue carlos",
    age: 25,
    greet() {
        console.log(`hi, i am ${this.name}`)
    }
}

console.log(`nome ${person2.name}`)

person2.greet()


//ARRAYS 
const hobbies = ['sports', 'cooking']
for (const iterator of hobbies) {
    console.log(iterator)
}

let hobbies2 = hobbies.map((v, i) => { return v + "ola" + i })
console.log(hobbies2)


hobbies2.push('hahaha')

//SPREAD 
let copiedArray = [...hobbies2]
let copiedArray2 = hobbies2.slice();
let copiedPerson = { ...person }
console.log(copiedPerson)

const toArray = (...args) => {
    return [...args]
}

console.log(...toArray(1, 2, 3, 4))



//OBJECT DESTRUCTURING
let c = ({ age }) => {
    return age;
}

console.log(c(person2))

let { name, age } = person2;
console.log(name);

let [hobbie1, hobbie2] = hobbies;
console.log(hobbie1)



//ASYNC CODE  & PROMISES
/*setTimeout(() => {
    console.log('Done')
}, 2000)

setInterval(() => {
    console.log('Done')
}, 2000)*/


let fetchData = callback => {
    setTimeout(() => {
        callback('done')
    }, 1500)
}

setTimeout(() => {
    console.log('its done')
    fetchData((t) => {
        console.log(t)
    })
}, 2000)


//PROMISES
let promisses = () => {
    const promises = new Promise((resolve, reject) => {
        try {
            resolve(2 + 'w' - sd)
        } catch (error) {
            reject('error' + error)
        }
    })
    return promises
}

setTimeout(() => {
    console.log('its done')
    promisses()
        .then((value) => {
            console.log(value)
        }).catch((v) => {
            console.log(v)
        })
}, 2000)