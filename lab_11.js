//WAP to check whether a number is Prime Number or not

let num = 15;

let isPrime = true;

if(num<=1){
    isPrime =false;
}else {

for(let i=2; i<num; i++){
    if(num%i===0){
        isPrime = false;
        break;
}
}
}
if(isPrime){
    console.log("Yes it is a prime number");
}else{
    console.log("No, it's not a prime number");
}

