console.log(x); // return indefined 
a();
// b();      //give error bcz both act like variable
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
