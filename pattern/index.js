//  q-2

let num = 5;
let count = 1

for(let i=1; i<=num; i++){
  let stars = ''
  for(let j=1; j<=i; j++){
    stars = stars + ` ${count++}`
    // count = count+1
  }
  console.log(stars)
}


// q-3

let a = 0;
let b = 1

for(let i=1; i<=5; i++){
  let stars = ''
  for(let j=1; j<=i; j++){
    let c=a+b
    a=b;
    b=c
    stars = stars + c
    
  }
  console.log(`  ${stars}`)
}