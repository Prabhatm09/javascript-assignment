// let array = 'A paragraph is a series of sentences that  dhoni are organized and coherent, and are all related to a single topic.'
// let target = 'dhoni'

// let newArray = array.split(' ')
// // console.log(newArray)

// let isPresent = false
// for(let i=0; i<newArray.length; i++){
//     if(newArray[i] === target){
//            isPresent = true
//     }
// }
// console.log(isPresent)

//startwith , endWith

// let email = 'prabhatmishra1409@gmail.com'

// if(email.endsWith('@gmail.com')){
//     console.log('valid mail');
// }else{
//     console.log('invalid')
// }

// let email = '+91 7607873685'

// if(email.startsWith('+91')){
//     console.log('valid number');
// }else{
//     console.log('invalid')
// }

// let number= '7607873685'

// if(number.length == 10){
//     console.log('valid number');
// }else{
//     console.log('invalid')
// }

// let names = 'Prabhat'
// let reversedName = ''
// for(let i=0; i<names.length; i++){
//     reversedName = names[i] + reversedName
// }
// console.log(reversedName);

// let names = 'prabhat is good boy'
// console.log(names.match(/is/ig));
// console.log(names.indexOf('is'));


let word = 'god'
let word1 = 'dog'

if(word.split('').sort().join('') == word1.split('').sort().join('')){
    console.log('anagram');
}else {
    console.log('not a anagram');
}