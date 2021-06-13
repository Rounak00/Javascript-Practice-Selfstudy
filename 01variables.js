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