console.log(x); // return indefined 
a();
console.log(a); // it simply print function
// b();      //give error bcz both act like variable if we make them proper functions then it works fine
// c();      //give error bcz both act like variable
console.log(c); // it throw indefined 

var x= 10;
function a(){
     console.log("hello a");
}
var b=()=>
{
    console.log("hello b");
}
var c=function(){
    console.log("hello c");
}
console.log(x);
a();
b();
c();

// and if we right something like 
console.log(y); // bcz there is no variable in this name so it throw an error (not  defined)
 