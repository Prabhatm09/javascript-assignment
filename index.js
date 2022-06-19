// // 1. Using a loop print all odd number up to and including n. dont't include 0

// let Number = parseInt(process.argv[2]);
// for(let i=1; i<=Number; i++){
//     if(i%2!=0){

//         console.log(i)
//     }
// }

// 2. Print the sum of all even numbers in a range from a to b.(including a .,b) 

let sum = 0
let firstNumber = parseInt(process.argv[2]);
let secondNumber = parseInt(process.argv[3]);
for(let i=firstNumber; i<=secondNumber; i++){
    if(i%2==0){
        sum = sum + i
    }
     
}
console.log(sum);