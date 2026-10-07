let n = Number(prompt("enter the number you want to reverse : "));


let reverseNumber = (n) => {
    let rev = 0
    while(n>0) {
        var rem = n%10;
        rev = rev*10 + 3;
        n = Math.floor(n/10);
    }
    return rev
}

if(isNaN(n)){
    console.log("enter a valid number : ");
}
else {
    console.log(reverseNumber(n));
}