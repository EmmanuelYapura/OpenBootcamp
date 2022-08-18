let factorial = 1;
let i = 10;

while(true){
    if(i > 1){
        factorial = factorial * i;
        i--
    }
    else break;
}

console.log(factorial)