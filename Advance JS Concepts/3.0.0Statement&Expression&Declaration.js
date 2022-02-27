..................Function Statement/Declaration:...................
  
  Use function name-
  function a(){
      console.log("Hello");
  }

..................Function Expression:...................
 var b=function(){
    console.log("Hello");
 }  

 Function Expression and Statement Difference between them is hoisting



 ...........Name function Expression ............

var b=function xyz(){
    console.log("Hello");
 } 
 but here if you call byy name like xyz() it throug an error. bcz when we assign it in a var, its not hoisting in its outer scope , its local now 


 ........Parameters&Arguments.............

 function ab(a)//Parameters/identifiers and lables
 {
     console.log(a);
 }
 ab(5);//Arguments


 ................Arraow Functions........

 let a=()=>{console.log("Fat Arrow");}
a();

* fat arrow function not allow this key word 

........................Implicit Calling............
//Implicit return : A function is returned values without using the return keyword, it's called an implicit return. You must use an implicit return in a concise body.

// Single-line
const implicit = (value) => value;

// Multi-line
const implicit = (value) => (
  value
);

Example2:
const implicit = () => { value: 1 };
implicit(); // undefined

const implicit = () => ({ value: 1 });
implicit(); // { value: 1 }