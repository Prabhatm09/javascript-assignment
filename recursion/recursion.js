// Given two numbers return the largest number.

function largest(a , b){
    if(a>b){
        return a
    }
    return b
}
console.log(largest(30 , 20))

// Check if the given number is a multiple of 3 and 7.

function multiple(num){
    if(num%3==0 && num%7==0){
        return "Yes"
    }
    return "No"
}
console.log(multiple(214));

// find the factorial of a any number

function facto(num , fact){
    if(num>0){
        fact *= num
        return facto(num-1 , fact)
    }
    return fact
}
console.log(facto(6 , 1))


// Given a number, determine whether it is odd or even.

number = (num) => {
    if(num%2==0){
        return "This is even no " + num
    }
    return "This is odd no " + num
}
console.log(number(27));

