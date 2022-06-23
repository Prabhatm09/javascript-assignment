// Q-1  Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13
//  return double the absolute difference.

let num = parseInt(process.argv[2]);

if(num>13){
         console.log(2*num)
}else{
    console.log(13-num)
}

// Q-2 Write a JavaScript program to check two given numbers and return 
// true if one of the number is 50 or if their sum is 50

let num = parseInt(process.argv[2]);
let num_2 = parseInt(process.argv[3]);
 
let sum = num + num_2
if(num=num_2==50 || sum == 50 ){

    console.log(true) 
}else{
    console.log(false)
}


// Q-3 Check whether a given integer is within 20 of 100 or 400


function testhundred(num){
 return ((Math.abs(100 - num)<=20)  ||  (Math.abs(400-num)<=20)) ;
}
console.log(220)

//Q-4 Take a time in 24 hour fomrat and onvert it to 12 hour format. Also if hour or minute is 
// of single digit add "0" before it

 time = (hr , min) => {
    if(hr==0){
        min = min<10 ? '0'+min : min;
        hr = hr<10 ? '0'+hr : hr;
        return ('12:'+min+' AM')
    } else if(hr>=12){
        hr = hr-12
        min = min<10 ? '0'+min : min;
        hr = hr<10 ? '0'+hr : hr;
        if(hr==0){
            return ('12:'+min+' PM')
        }else{
             return (hr+':'+min+' PM')
        }
    }else{
        min = min<10 ? '0'+min : min;
        hr = hr<10 ? '0'+hr : hr;
        return (hr+':'+min+' AM')
    }
 }
 console.log(time(12,60))

// Q-5 Take a number and find the "ans" by sum of sqaure of digits. once you find this "ans" repeat the steps ( I mean find sum of square of digits of ans)
//   and repeat this process until you get 1.

function checkNumber(n){
    let counter = 1;
     while(counter<100 && n!=1){
       let sum = 0 
       while(n!=0){
         let x= n%10;
         sum = sum+(x*x)
         n=Math.floor(n/10)
       }
       counter++;
       n= sum
     }
     if(n==1){
       return ('CodeSpecial')
     }else{
       return ('SomethingUnusual')
     }
   }
   console.log(checkNumber(149))

// Take 3 numbers and find and return biggest of them. If all three numbers are same than print "None of them is biggest"
// if there are two numbers same as biggest than also print "None of them is biggest"

function biggest(a,b,c){

    switch(a>b && a>c) {
      case true:
        return  a;
      break;
    }
    switch(a<b && b>c){
      case true:
      return b;
      break;
    }
     switch(a<c && b<c){
      case true:
      return  c;
      break;
     }
      switch(a==b || b==c || a==c){
    case true:
      return "None  of them is biggest";
          
      }   
    }
  
  console.log(biggest(10,20,30))
 