//Objects
// objet is primiptivr datatype, we know hoe to define it but lets see a example

var a={
    age:18,
    gender: "male",
    address:{
       town:"bardhaman",
       ward:21,
       post_office: "Nutanganj"
    },
    parents:true
}
//----------------------------------------------end-----------------------------------------------------------

//Array:-
//typeof of a array is alaways a object
var arra=[1, 2, 3, 4];// simple declaration
arra[4]=5; // add extra value

//inbuilt functions
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
a.splice(2,0,"lulli")//indexnum, del anything , add new element in that index 
a.slice()//same as splice but splice change original array and slice not 