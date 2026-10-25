// printing 5 " * " in a single column
for(let i=1;i<=5;i++){
  console.log("*")
}



// printing 5 " * " in a single row
let pattern = " "
for(let i=0;i<5;i++){
  pattern += "*";
}
console.log(pattern);


//printing 5 '*' in 5*5 pattern
for(let j=0;j<5;j++){
  let pattern = " "
  for(let i=0;i<5;i++){
    pattern += "*";
  }
  console.log(pattern); 
}


//right angle triangle
  let pattern = " ";
  for(let j=0;j<5;j++){
    pattern += '*';
    console.log(pattern);
  }

//reverse right triangle
let n = 5;
for(let i=1;i<=n;i++){
  let row = ' ';
  for(let j=1;j<=i;j++){
    row += '*';
  }
  console.log(row);
}

//mirror right triangle
let n = 5;
for(let i=1;i<=n;i++){
  let row = ' ';
  for(let j=1;j<=n-i;j++){
    row += ' ';
  }
  for(let s=1;s<=i;s++){
    row += '*';
  }
  console.log(row);
}

//reverse mirrored right triangle
let n = 5;
for(let i=n;i>=1;i--){
  let row = ' ';
  for(let s=1;s<=n-i;s++){
    row += ' ';
  }
  for(let j=1;j<=i;j++){
    row += '*';
  }
  console.log(row);
}


// centered triangle/pyramid
let n=7;
for(let i=1;i<=n;i++){
  let row = ' ';
  for(let j=1;j<=n-i;j++){
    row += ' ';
  }
  for(let x=1;x<=i;x++){
    row += '*';
  }
  for(let z=1;z<=i-1;z++){
    row += '*';
  }
  for(let y=1;y<=n-i;y++){
    row += ' ';
  }
  console.log(row);
}

//right triangle using numbers
let n = 5;
for (let i=1;i<=n;i++){
  let row = ' ';
  for(j=1;j<=i;j++){
    row +=j;
  }
  console.log(row);
}

//right triangle using alphabet
let n = 5;
for (let i=1;i<=n;i++){
  let row = ' ';
  for(j=1;j<=i;j++){
    let char = String.fromCharCode(64+j);
    row += char + ' ';
  }
  console.log(row);
}

// 'X' pattern
let n = 7;
for (let i=0;i<2*n-1;i++){
  let row = ' ';
  let col = n;
  for(let j=0;j<col;j++){
    if(j===i || j===col-i-1){
      row +='*';
    }
    else{
      row +=' ';
    }
  }
  
  console.log(row);
}

// 'X' pattern
let n = 5;
for(let i=0;i<n;i++){
  let row = ' ';
  for (let j=0; j<n;j++){
    if(j===i || j===n-i-1){
      row +='*';
    }
    else{
      row +=' ';
    }
  }
  console.log(row);
}

