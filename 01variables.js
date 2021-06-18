var userName="Sumit Kr. Das";//thid is string data type
var payment=true;//this boolean data type
var num=100;//this is integer data type

console.log(userName);
console.log(payment);
console.log(num);

// * function scope and block scope

function fun(a){
    if(a%2==0){
        console.log("This is even");
    }//this is called block scope

}//this is called function scope

// * var is function scope
// * let & const are block scope

// Now lets see some Example of block and function element

//1. Var

function a(){
    if(true){
        var name="Rounak";
        console.log("Name 1st time " + name);
    }
    console.log("Name 2nd time " + name);
}
a();

function b(){
    if(true){
        let nam="Rounak";
        console.log("Name 1st time " + nam );
    }
    console.log("Name 2nd time " + nam); // There error happend , bcz Ecma6 block element .
}
b();


//Declare in variables
let a= 5;
let b= true/ false;
let c= undefined / null;
let d= ['a','b',2,4,null]; //array
let e= "rounak"; // string

