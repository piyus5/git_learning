// Primitive

// 7 types : String, Number , Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // number

const isLoggedIn = false // boolean
const outsideTemp = null // object
let userEmail;  // undefined
const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);  // Symbol


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

//console.log(typeof isLoggedIn);   // boolean




//********************** memory usage ************************

// stack (Primitive) [copy of value ], Heap (Non- Primitive) [copy of reference: if we do any changes it changes the main value/original value]

// whenever stack memory is used that means we get copy of declared variable

// while when Heap is used then we get reference from there


let myYoutubeName = "Stryder"
let anothername  = "myYoutubeName" 
anothername = "RGPV_Bhopal"
console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "piyus@ybl"
}

let userTwo = userOne

userTwo.email = "0173cs221091@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

console.log(userTwo.upi);

