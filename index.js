// // 1. Using a loop print all odd number up to and including n. dont't include 0

// let Number = parseInt(process.argv[2]);
// for(let i=1; i<=Number; i++){
//     if(i%2!=0){

//         console.log(i)
//     }
// }

// 2. Print the sum of all even numbers in a range from a to b.(including a .,b) 

// let sum = 0
// let firstNumber = parseInt(process.argv[2]);
// let secondNumber = parseInt(process.argv[3]);
// for(let i=firstNumber; i<=secondNumber; i++){
//     if(i%2==0){
//         sum = sum + i
//     }
     
// }
// console.log(sum);

// 3. write a program to read the first and last digit of a number

// let digit = parseInt(process.argv[2]);{

// let firstDigit = Math.floor(digit/10) 
// let lastDigit = digit%10

// }

// console.log(firstDigit+","+lastDigit) 

// 4. check whether the given number is an armstrong number or not?


 let num = 408;
 let firstDigit = Math.floor(num/100);
 let secondDigit = Math.floor((num%100)/10);
 let lastDigit = ((num%100)%10);
let armstrong = firstDigit**3 + secondDigit**3 + lastDigit**3 
 if( armstrong == num){
  console.log("Its an armstrong number");
 }else{
  console.log("Its not a  armstrong number");
 }