the scope chain is used to resolve the value of variable names in javascript. 

Scope chain in java script is lexically defined, which means that we can see what the scope chain will be by looking at the Code .At the top of the scope chain is the global scope, which is the window object in the browser. 


Lexical Scoping: a function is lexically within another function get access to the scope of outer function.(inner function can get access of their parent function but vice versa not happened)

Example:-
var a=10;
function f(){
    var b=20;
    console.log(a+b);//30
}
f(); 