//find the element of matrix
let matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
console.log(matrix[3][2])
console.log(matrix[0][2])
console.log(matrix[2][2])
console.log(matrix[1][3])

//find the length of row and col
let matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let row = matrix.length
let col = matrix[0].length

console.log(row)
console.log(col)

//find the sum of digonal number

let arr = [
    [1,2,3,4],
    [2,3,4,4],
    [4,5,6,8],
    [11,22,33,44]
]
let row = arr.length
let col = arr[0].length
let sum = 0;
for(let i=0; i<row; i++){
    sum += arr[i][i]
}
console.log(sum)

find the  col value sum
let arr = [
    [1,2,3,4],
    [2,3,4,4],
    [4,5,6,8],
    [11,22,33,44]
]
let row = arr.length
let col = arr[0].length
let sum = 0;
let start = 0;
for(let i=0; i<col; i++){
    sum += arr[start][i]
}
console.log(sum)

// show how to linear search
let nums  = [12,34,67,45,87,69,99]
let target = 45;
 let target = 120;

function isPresent(nums , target){
    for(let i=0; i<nums.length; i++){
        if(nums[i]==target)  return true
    }
    return false//linear search

}
console.log(isPresent(nums , target));


//practice of spread operator
 
let numbers = [1,2,3,4,5,6]
let name = 'Prabhat'
let anotherNumber = [12,44,56,7,3]

console.log([...numbers , name ,  ...anotherNumber]);

let myVehicle = {
    brand : 'ford',
    model : 'Endevour',
    color: 'black'
}

let updateMyvehicles = {
    type:'Car',
    year:'2021',
    color:'yellow'
}

console.log(myVehicle.concat(updateMyvehicles));

let numberStore = [0,1,2];
let newNumber =  12;
 numberStore = [...numberStore , newNumber]
 console.log(numberStore);

let arr1 = ['one', 'two']
let arr2 = [...arr1 , 'three', 'four']
console.log(arr2);
arr2.pop()
console.log(arr2);
arr2.unshift('Prabhat')
console.log(arr2);

//spread operator using on object
let obj1 = {x:1, y:2};
let obj2 = {z:3}

let obj3 = {...i=obj1 , ...obj2}
console.log(obj3);

let para = 'The javascript spread operator (...) allows us to quikly copy all or part of an existing array or object into another array or object'

console.log(para.replace(/javascript/ig , 'Javascipt'))

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];


console.log(animals.slice(2));

console.log(animals.slice(2,4));

console.log(animals.slice(1,5));

console.log(animals.slice(-2));

console.log(animals.slice(2,-1));

let text = "       Hello World!        ";
console.log(text.trimStart());
console.log(text.trimEnd());

let newArr = [2,4,5,6]
  console.log(newArr.includes(3));
  console.log(newArr.includes(6));

  let animal = ['cat', 'dog', 'tiger']
  console.log(animal.includes('billi'));
  console.log(animal.includes('cat'));
