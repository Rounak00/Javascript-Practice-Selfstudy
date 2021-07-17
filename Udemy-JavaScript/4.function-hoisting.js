// Scope and Environment here if var outside function then it is global variable nor it is local variable
//-------------------------------------------end-----------------------------------------------------
// variable hoisting:-
v=10;
console.log(v);// there is no error and tgis is hoisting process
var v;
// javascript always know the declarition of varible alwys in its top
// so it throw undefined

console.log(v);// there is  error and this is  hoisting process
v=10;
var v;
//--------------------------------end-----------------------------------
// function hoisting:-
// in normal
sum(2,3);
function sum(a,b){console.log(a+b);}
sum(3,4);
// there normally no error in both cases

// but if
sum(3,4);
var sum=function(a,b){console.log(a+b);}
// it throw error
//--------------------------------end-----------------------------------
