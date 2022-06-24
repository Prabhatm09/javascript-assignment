
//Q-1 Print all the numbers in the given range
// function range(a , b){
//         console.log(a);
//     if(a<=b)
//     return range(a+1 , b)
// }
// range(1,10)

//Q-2 Print all the numbers in descending order in the given range
// function range(a ,b){
//     console.log(a);
//     if(a>=b)
//     return range(a-1 , b)
// }
// range(10,1)

//Q-3 Print all the even numbers in the given range

// function even(a,b){
//     if(a<=b){
//         if(a%2==0) {
//             console.log(a);
//             return even(a+1,  b)
//         }
//         return even(a+1 , b)
//     }
// }even(1 ,8)


// Find the factorial of a given number n.

// function fact(num, facto){
//     if(num>0){
//         facto=facto*num 
//         return fact(num-1,facto)
//     }
//     console.log(facto);
// }
// fact(5,1)

// Find the nth digit of the fibonacci series.

function fibo(first, second, count, n){
    if(count<n){
        c=first+second 
        return fibo(second, c, count+1, n)
    }
    return first
}
console.log(fibo(1,1,1, 10));

// Print sum of all the numbers in the given range.

// let sum ;
// function range(a , b){
//     console.log(sum);
//     if(a<=b)

//         return range(a+1 , b)
    
    
//     sum =sum + a
    
        
// }
// range(1,5)













//  let a = 1
//  let b = 10
//  for(let i=a; i<=b; i++){
//     if(i%2==0){
//         console.log(i)
//     }
//  }

//  let = even = (a,b)=>{
// for(let i=a; i<=b; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// }
// even(1,10);
    
     

     

    
    
    
