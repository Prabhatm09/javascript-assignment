// 1. Using a loop print all odd number up to and including n. dont't include 0

let Number = parseInt(process.argv[2]);
for(let i=1; i<=Number; i++){
    if(i%2!=0){

        console.log(i)
    }
}

