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

//find the  col value sum
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
// let target = 120;

function isPresent(nums , target){
    for(let i=0; i<nums.length; i++){
        if(nums[i]==target)  return true
    }
    return false//linear search

}
console.log(isPresent(nums , target));