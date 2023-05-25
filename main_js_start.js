let x = 5;
let y = 4;  

let z = "5";
let i = "4";
let someBool = 4 > 5;

let v = null;
let h;
//console.log(v);

//if statement
if( x < y ) {
    console.log ("x greater than y");
} else {
    console.log("x smaller than y");
}

//for loop
for(let k = 1; k <= 10;k++) {
    console.log(k**2);
}

let arr = ["apple","banana","watermelon","kiwi"];
for(let m = 0; m< arr.length; m++){
    console.log(arr[m]);
}
for(let iterator of arr){
    console.log(iterator);
}

const l = 8;
//l = 9; not allowed to change constant variables
console.log(l);

//var p = 2; not used anymore since 2016
// for more info about javascript go to:
// w3schools.com/js/default.asp
