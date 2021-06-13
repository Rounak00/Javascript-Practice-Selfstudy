const prolang = ["php","javascript","java","c++"];

// in es5 ---------------------------

var pro1=prolang[0];
var pro2=prolang[1];
var pro3=prolang[2];
var pro3=prolang[3];

console.log("my feb language is "+ pro1);

// in es6------------------------------
// * Array Destructuring 

let [prog1,prog2,prog3,prog4]=prolang;
console.log(`my second programming language is ${prog4}`);

