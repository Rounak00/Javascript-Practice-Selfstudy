Types in js:
Number, string, boolean, undefined , null, symbol those are primitive
Object(array, function, object) non primitive datatype

non primitive datatypes are also known as reference datattype bcz it store the reference

#NULL type also show us object bcz of some error while making java Script 

Example:
 1.console.log(typeof({}))  // for scope its object
 2. console.log(typeof([])) //for array its object
 3.console.log(typeof(function (){}) ) // but here its shows function but we know its a obeject then lets prove the 3
 
 const check=()=>{
     console.log("checking")
 }
 check.letshavefun="I am a function too"

 console.log(check.letshavefun());

 its here work like a object and we can prove its a object. 



 .............Array is object lets prove it..........

 const array=[1,2,3]
 it also same as ->
 const arrayobj={
     0:1,
     1:2,
     2:3
 }

 isArray() is a function that return true if  a object is an array. and its use under array constructor. 
 
 console.log(Array.isArray(array)) //here Array s constructor and isArray use under this constructor

 
