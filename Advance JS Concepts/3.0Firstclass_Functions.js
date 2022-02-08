..........First Class citizen Function...........

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
      return b(){
         console.log("Hello")
      }
  } 
  a()(); or we do also using a variable
  const x=a();
  x();  