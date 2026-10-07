let n = Number(prompt("enter the number : "));

123

const isStrongNumber = (n) => {
  let temp = n;
    var sum = 0;
    while(n>0){
        let rem = n%10
        let fact = 1;
        for(let i=1;i<=rem;i++){
            fact = fact*i;
        }
        sum = sum + fact;
        n = Math.floor(n/10);
    }
    if(sum === temp){
        return true;
    }
    else if(sum !== temp){
        return false
    }
}

if(isNaN(n)){
    console.log("enter a valid number : ");
}
else {
    let StrongNumber = isStrongNumber(n);
    if(StrongNumber){
        console.log(`${n} is a strong Number`)
    }
    else{
        console.log(`${n} is not a strong Number`)
    }
}