// this program accepts two numbers from the user n1(start number) and n2(no. of numbers to be added) and gives the sum of first n2 numbers starting from n1

let n1 = Number(prompt("enter the starting number : "))
let n2 = Number(prompt("enter the total number of numbers to be added : "))


const sumOfNumbers = (n1,n2) => {
    let sum = 0; 
    for(let i=0;i<n2;i++){
        sum = sum + n1;
        n1++;
    }
    return sum
}

if(isNaN(n1) && isNaN(n2)){
    console.log("please enter a valid number !!!")
}
else { 
    console.log(sumOfNumbers(n1,n2));
}