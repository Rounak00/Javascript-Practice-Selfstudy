..........First Class citizen Function...........
/*
BCZ:-
 1: in js we can assign function in a variable
 2: Pass a function as an Argument
 3: Returning function
*/ 

#if a function treated like variable is called first class function.

Example:
    var a=function(){};

We can pass functions as arguments as WEll 
 Example:
 
   const g=()=>{return "Hello "}

   const greet=(fun,name)=>{
       console.log(fun()+name);
   }
   greet(g,"Rounak");


A function also return function
Example:
  function a(){
      return function(){
         console.log("Hello")
      }
  } 
  a()(); or we do also using a variable
  const x=a();
  x();  