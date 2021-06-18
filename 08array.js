var a = ["sumit", "snehasis", "suman", "amit"];
var b= ["Rounak" , "jit"];
for (i = 0; i < a.length; i++) {
    console.log(`${a[i]}`);
}


// ES5
console.log(a.length); // return the length of array
console.log(a.sort());// for sorting in ascending order
console.log(a.reverse()) ;// for sorting in descending oreder
console.log(a.indexOf("sumit"));// return the index number
console.log(a.concat(b));// for concatination two arrays
console.log(Array.isArray(a));// if the variable is array show true
// push and pop use for edit values from the END of the array
a.push("jit");
console.log(a.sort());
a.pop();
console.log(a.sort());
// unshift and shift use for edit values from the Begining of the array
a.unshift("Rm");
console.log(a.sort());
a.shift();
console.log(a.sort());    // here pop is shift and push is unshift


// ES6
//Destructering Array
let al=['arrow', 'ball'];
console.log(typeof(al));