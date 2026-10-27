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

// Maximum value in a given Array
const arr = new Array(Number(prompt("enter the size of the array : ")));
let temp;
let index = 0 ;
for(let i=0;i<arr.length;i++){
  arr[i] = Number(prompt(`enter the value for ${i} index : `))
  temp = arr[0];
  if(temp<arr[i]){
    temp = arr[i];
    index = i;
  }
}
console.log(`the maximum value in the given array is ${temp} and the index is ${index}`)



// max and second max value in a given Array
const arr = new Array(Number(prompt("enter the size of the array : ")));
for(let i=0;i<arr.length;i++){
  arr[i] = Number(prompt(`enter the value for ${i} index : `))
}
let max = arr[0];
let secondMax = arr[0];
let maxIndex = 0;
let secondMaxIndex = 0;
for(let i=0;i<arr.length;i++){
  if(max<arr[i]){
    secondMax = max;
    secondMaxIndex = maxIndex;
    max = arr[i];
    maxIndex = i;
  }
  else if(arr[i]>secondMax && max!==arr[i]){
    secondMax = arr[i];
    secondMaxIndex = i;
  }
}
console.log(`the max is ${max} at index ${maxIndex} Secondmaximum value in the given array is ${secondMax} and the index is ${secondMaxIndex}`)



// Reversing an Array using TWO-POINTER Approach and Array-Destructuring
const arr = [1,2,3,4,5];
for(let i=0,j=arr.length-1;i<j;i++,j--){
  [arr[i],arr[j]] = [arr[j],arr[i]];
}
console.log(`reversed array is : ${arr}`)



// Sorting an Array of 0s and 1s
const arr = [1,0,0,1,0,1];
let j = 0;
for(let i=0;i<arr.length-1;i++){
  if(arr[i]===0){
    [arr[j],arr[i]] = [arr[i],arr[j]];
    j++;
  }
}
console.log(`the resultant Array is : ${arr}`)