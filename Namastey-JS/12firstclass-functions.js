

//1. function statement/ function Declaration:-
function a(){
    console.log("a is called");  // this way creating a function is known as function statement
}

//2. function Expression
var b=function () {
    console.log("B called") // function Expression
}
/* difference between this  two is hoisting*/


//3. anonymous function:-
/* a function with out a name is known as anonymous function. it is use in a place where functions use as values
 example:- */
function (){
    console.log("hello");
}

//4. named function Expression:-
// when we give a name of anonymous function and also put it in a variable
var c= function x(){
    console.log("c called");
}
c(); // not error
x(); // refference error
/* but we can access those function inside this function means
var c= function x(){
    console.log(x); // its print that function
} */

//5. difference between parameters and arguments:-
function f(a,b){  // here a,b parameters in whole f function
    console.log(a*b);
}
f(a,b); // here a,b argument


//6. First Class functions, callback function, higherorder function:-
// when functions treated as an value and pass in to another function or return it from a function is known as first class function.
//ex 1:-
function w(pram){
console.log(pram); // pram print that anonymous function and that function call back function
}
w(function(){});
//EX 2:-
function w2(pram){
    console.log(pram); // print xyz function and xyz is callback function
}
function xyz(){}
w2(xyz);
// ex3:-
var w3=function () {
    return function(){}
}
console.log(w3()); // a function is returned a function known as higher order function


//7. first class citizens:- same of firstclass function