// Primitive : Call by value

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 0.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber = 363728363783829789823n



// Referenece type (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj", "doga"]

let myObj = {
    name : "Prince",
    age : 20,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber)
console.log(typeof myObj)
console.log(typeof myFunction)
console.log(typeof heros)