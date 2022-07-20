//factory method
//function creating new object without using 'new' keyword.

function createRoll(name , rollNUmber){
   return{
      name:name,
     rollNUmber:rollNUmber,
      cll:function(){
         console.log(`My name is ${name}  and my rollNumber is ${rollNUmber}.`);
      }
   }
};


const student = createRoll('Prabhat' , 12)
student.cll();
const student1 = createRoll('Aman', 15)
student1.cll();
const student2 = createRoll('Prabhat' , 12)
student2.cll();
const student3 = createRoll('Arun', 105)
student3.cll();


//constructor method

function isPerson(name , age , gender ){
   this.name =  name,
   this.age = age,
   this.gender = gender ,
   this.greet = function(){
     console.log(`Hi  , my name is ${name} and i am ${age} year old ${gender} `)
   }
}

const p1 = new isPerson('aman', 20 , 'male')
const p2 = new isPerson('anjali', 13 , 'female')


p1.greet();
p2.greet();
// console.log(p2.greet());


// //in javascrip every primitive datatype is an object
let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number();    // A new Number object
let d = new Boolean();   // A new Boolean object


//object using value , keys , entries
let bakery= {
 cake1 : 'chocolate',
 cake2: 'vinalla',
 cake3:'strawberry',
 cake4: 'blackforest'
}
let bake = Object.keys(bakery)
let bake1 = Object.values(bakery)
let bake3 = Object.entries(bakery)
console.log(bake , bake1 , bake3)

let copy = JSON.stringify(bakery)
console.log(copy);
let copied= JSON.parse(copy)
console.log(copied);


