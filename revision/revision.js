
//['a', 'b', 'a', 'c', 'b'] unique chars

let chars = ['a', 'b', 'a', 'c', 'b'];
let uniqueArrays= [];
 for(let i=0; i<chars.length; i++){
    if(!uniqueArrays.includes(chars[i])){

        uniqueArray.push(chars[i]);
    }
 }
 console.log(uniqueArray);
 //alternate method
 let uniqueArray = chars.filter((char , index)=>{
    return chars.indexOf(char) !== index;
 })
 console.log(uniqueArray);

//q-2
let nums = [11,9,4,17,25,33,19]

getNthLarget = (nums , pos)=>{
    nums.sort((a,b)=> a-b)
 return nums[pos-1]   
}

console.log(getNthLarget(nums , 3));


let obj = {
    name : 'vasu',
    age : 20,
    age : 40
};
console.log(obj.age);

function isValidParanthesis(string){
    let map = {
        '{':'}',
        '[':']',
        '(':')',
    };
    // console.log(map['[']);
    let stack = [];

    for(let i=0; i<string.length; i++){
        if(string[i] == '[' || string[i] == '(' || string[i] == '{'){
            stack.push(string[i]);
        }else{
            let closingBrackets = string[i];
            let lastBracketPair = stack.pop();
            if(closingBrackets !== map[lastBracketPair]){
                return false
            }
        }
        if(stack.length !== 0){
            return false
        }
    }
    return true
}

console.log(isValidParanthesis("{([])}"));
console.log(isValidParanthesis("{([)}"));
console.log(isValidParanthesis("{([]}"));
console.log(isValidParanthesis("{(])}"));
console.log(isValidParanthesis("{[])}"));
console.log(isValidParanthesis("{([])}"));


let news = 'vasu is a average teacher';
 let newArray = news.split(' ');

 for(let i=0; i<newArray.length; i++){
    newArray[i] = newArray[i].split('').reverse().join('')
 }
 console.log(newArray.join(" "));

//rotate by one char
let string = 'prabhat'
let rotateString = string.slice(0 , 1)
let sliced = string.slice(1)
console.log(` ${sliced}${rotateString}`);

//spiral snake matrix
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  
  // 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
  let top = 0,bottom = 3, left = 0, right = 3, direction = 0;
  
    while(left <= right && top<=bottom) {
      if(direction == 0) {
          for(let i=left; i<=right; i++) {
              console.log(matrix[top][i]);
          }
          top += 1;
          direction = 1;
      }
  
      if(direction == 1) {
          for(let i=top; i<=bottom; i++) {
              console.log(matrix[i][right]);
          }
          right -= 1;
          direction = 2;
      }
  
      if(direction == 2) {
          for(let i=right; i>= left; i--) {
              console.log(matrix[bottom][i]);
          }
          bottom -= 1;
          direction = 3;
      }
  
      if(direction == 3) {
          for(let i=bottom; i>=top; i--) {
              console.log(matrix[i][left]);
          }
          left += 1;
          direction = 0
      }
    }