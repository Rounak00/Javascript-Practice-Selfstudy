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

