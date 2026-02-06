// for (let count = 1; count <= 5; count++) {
//     console.log("Hello world");
// }


//******************* For loop *******************************

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log("sum = ", sum);


//************************* While loop************************* */

// let i = 1;
// while (i <= 5){
//     console.log("i = ", i);
//     i++;
// }

//************ do-while loop********************************************************* */

// let sum = 0;
// let i = 1;
// do{
//  sum = sum + i;
//  console.log("i = ", i);
//  i++;
// }while (i <= 5);


//******** For- of loop ***********************************************

 
// if i want to know the length of string 

// let str = "JavaScript";
// let size = 0;

// for(let i of str){
//     console.log("i = ", i);
//     size++;
// }
// console.log("String size = ",size);


//*********************** For -in loop ************************************** */

// let student = {
//     name: "Piyush shukla",
//     age: 23,
//     cgpa: 7.5,
//     isPass: true
// };

// for (let key in student){
//     console.log("key= ",key, " value=",student[key]);  
// }


//     for (let num = 0; num <= 100; num++) {
//         if (num % 2 === 0){ 
//     console.log(num);
//         } 
// }


//    for (let num = 0; num <= 100; num++) {
//         if (num % 2 !== 0){ 
//     console.log(num);
//         } 
// }


let gamenumber = 25;
let userNum = prompt("Guess the game number : ");

while(userNum != gamenumber){
userNUm = prompt("you entered wrong number. Guess again: ");
}
console.log("congratulations, you entered the right number");