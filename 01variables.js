var userName="Sumit Kr. Das";//thid is string data type
var payment=true;//this boolean data type
var num=100;//this is integer data type

console.log(userName);
console.log(payment);
console.log(num);

//Declare in variables
let a= 5;
let b= true/ false;
let c= undefined / null;
let d= ['a','b',2,4,null]; //array //Type of array is always a object. it actually looks like a sub object.
let e= "rounak"; // string
let x = NaN; //when it is non performable like if we want to divide a string with a number
// falsy values are NaN,false , 0 and -0;

// Corecion to a number:-

// just type the variable type and ase ().... and you are good to go;
//  example:-
     let xd='10';
     Number(xd) // we can use for Boolean.
     parseInt (xd)//it is also use by make a string to a integer
     console.log((+xd)); // use unary operator
    
    //  for string
         xd.toString();


// Scope:-         
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


// now what is lexical scope , assume there's a variable x=10 in global and a function f call that variable in 
// that case variabe not decalre in function and and js try to find otside of function its called lexical scope.
