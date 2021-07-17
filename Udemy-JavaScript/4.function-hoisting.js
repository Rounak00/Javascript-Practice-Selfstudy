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
