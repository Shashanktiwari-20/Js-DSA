// Accepting values of an Array
const arr = new Array(5);
for(let i=0;i<5;i++){
  arr[i] = Number(prompt("enter the value for the "+i+" index : "));
}
console.log(arr);



// Accepting the values of an Array
const arr = new Array(Number(prompt("enter the size of the array : ")));
for(let i=0;i<arr.length;i++){
  arr[i] = Number(prompt("enter the value for the "+i+" index : "));
}
console.log(`the length of the array is ${arr.length}`);
console.log(`the Array is : [${arr}]`);


// Sum of all the values of an Array
const arr = [10,20,30,40,50];
let sum = 0;
for(let i=0;i<arr.length;i++){
  sum = sum + arr[i];
}
console.log(`the sum of the array is ${sum}`);

