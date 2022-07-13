function atmMachine(userEnteredPin){
    console.log(`welcome to bank of baroda atm machine`);
    console.log(`enter   your atm card`);
    console.log('user entering the pin', userEnteredPin);
    let originalPin;
    setTimeout(function(){
        originalPin = 1235;
        console.log('geeting the original pin from dB', originalPin);
        if(userEnteredPin==originalPin) console.log('Enter the amount');
        else console.log('Invalid Pin');
    },2000);
}

atmMachine(1235)

function evenDigit(a , b){
    console.log('write two variable');
    let c = a+b
    if((c)%2==0){
        console.log('print the even digit', c)
    }else{
        console.log('not a even digit')
    }
}
evenDigit(2,4)

function buycar(price){
    console.log(`Welcome to  showroom`);
    console.log(`Sir do you want coffee or water`)
    if(true) console.log('coffee');
    else console.log('water');
     console.log('send to the adviser');
    if(price>7){
        console.log(`My budget is not above 7lakh`);
    }else{
        console.log(`Yeah we love car feature what is the booking amount`);
    }
}
buycar(5);


 specialNumber = (n) => {
    if (n == 0) return 'NO';
    let originalNum = n;
    let sum = 0;
    while(n > 0) {
      let digit = n % 10;
      sum += getFact(digit);
      n = Math.floor(n/10);
      
    }
    if(originalNum === sum) return 'YES'
    else return 'NO'
  }
  
  function getFact(n) {
    let fact = 1;
    for(let i=2; i<=n; i++) {
      fact *= i;
    }
    console.log(fact)
    return fact;
  }
console.log(specialNumber(15));

