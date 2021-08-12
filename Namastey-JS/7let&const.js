

console.log(a1); // error (refference error)
console.log(a2); // undefined
 let a1=10;
 var a2=10;
  // both a1 and a2 are undefined first so both are hoisting but a1 store in a different memory space and we cant touch it until insialization
  // normally const and let store in a special memory location (not window.a1)
  // we cant make duplicate of 'let' , like let a=1 , let a=8 //--> you can't and this is a syntax error

//const also same but we cant do this in const :--->
const a5;
a5=10;
//throw error(sybtax error) // bcz here missing syntax bcz const keyword always expect a value in declaration
//but if we do this
 const a7=10;
 a7=40;
 // its theow error and its a type error



  // temporal Deadzone:-
//   its a time since when let variable hoisted and intilize some value


//refference error:- 
// its kind a not defined situations and also temporal deadzone time it also refference error

// syntax Error:- 
// when see duplicate or redeclaration of let
// also canr let a=1 , var a=10 its again syntax error
// but not error if var a=5, var a=8; not error


//type error:-->
// when we intilize a const variable and try to intialize again
