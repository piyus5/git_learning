// Primitive

// 7 types : String, Number , Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // number

const isLoggedIn = false // boolean
const outsideTemp = null // object
let userEmail;  // undefined
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // Symbol


// const bigNumber = 12345654321n // BigInt


// Non-Primitive

// Array, Objects, Functions

const students = ["Anjali","Abhishek","Anil", "Abhay", "Ansh"]; // object

let myObj = {   // object
    name : "Piyush",
    age : 22,
}

const myFunction  = function(){  //   function object
    console.log("Hello World");
}

console.log(typeof isLoggedIn);


