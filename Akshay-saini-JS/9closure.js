// closures:-
function x(){
    var a=7;
    function y(){
        console.log(a);
    } 
    y();
}
x();
 // this is what closure is.
 // closure is a function that bind togather in its lexical environment
 // or function along with it's lexical scope froms a closure


//  we can do this also :-
function x1(){
    var a1=7;
    function y1(){
        console.log(a1);
    } 
    return y1; // here not only function return the whole closure return here
}
var z=x1(); 
console.log(z);// it give us function y()
z(); // it run function y()
// here x nolonger exist after line 23 but in js fubction always remeber there lexical scope and there closure come into picture


// we can simply write second example this also
function x1(){
    var a1=7;
    return function y1(){
        console.log(a1);
    } 
     // here not only function return the whole closure return here
}


//now some corner cases for interview:-
 
// 1.
function x1(){
    var a1=7;
    function y1(){
        console.log(a1);
    } 
    a1 =100;
    return y1; 
}
// here function print 100 not 7

// closure uses:-
  /* 1. closure are using module design patterns
     2. currying
     3. functions like once
     4.maintain states in async world
     5. memorize
     6.setimeout
     7.iterators
     8... and manymore
     */

