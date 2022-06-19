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


//  let num = 408;
//  let firstDigit = Math.floor(num/100);
//  let secondDigit = Math.floor((num%100)/10);
//  let lastDigit = ((num%100)%10);
// let armstrong = firstDigit**3 + secondDigit**3 + lastDigit**3 
//  if( armstrong == num){
//   console.log("Its an armstrong number");
//  }else{
//   console.log("Its not a  armstrong number");
//  }

// 5. take two number and find product of all number between them satify following conditions

// let number = parseInt(process.argv[2]);
// let number_second = parseInt(process.argv[3]);
// let product = 1;
// for(i=number; i<=number_second; i++){
//     let secondLastDigit = i%10;
//     if(i%2==0 && secondLastDigit ==4)
//     product =product*i;
// }
// console.log(product);


// 6.take a number and return all the even digit of the number

// let number = parseInt(process.argv[2]);

// for(i=1; i<=number; i++){
//     if(i%2==0){
       
//         console.log(i);
//     }
// }
    
//7. check whether the given number is equal to its reverse number or not

let number = parseInt(process.argv[2]);

    let rev = Math.floor(number/100) 
  let rev1 = Math.floor(number/10) 
  let rev2 = rev1%10 
  let rev3 = number%10  
  let sum = rev3*100 + rev2*10 + rev
  if(number==sum){
    console.log("yes");
  }else{
    console.log("no");
  }

    



