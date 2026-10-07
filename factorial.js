//program to find the factorial of a number

let n = Number(prompt("enter the number whose factorial you want to calculate : "));

const Factorial = (n) => {
    let fact = 1;
    for(let i=n;i>0;i--){
        fact = fact*i;
    }
    return fact;
}
if(isNaN(n)){
    console.log("enter a valid number");
}
else { 
    console.log(Factorial(n));
}