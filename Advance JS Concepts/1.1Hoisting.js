Hoisting is a Javascript mechanism where variables and function declaration are moved to the top of their scope before the code execution.

Example:
   sum(5,5);
   function sum(a,b){
       add=a+b;
       console.log(add);
   }
   
Now hoisting not working if the for following examples:
 
(sum(5,5);
function sum(a,b){
    add=a+b;
    console.log(add);
})

sum(5,5);
var sum= function (a,b){
    add=a+b;
    console.log(add);
}

sum=(a,b)=>{console.log(a+b)}


.....................Variable Hoisting..................

nothing just the ariable always defined as undefined

Example: 

console.log(a); //print undefined
var a=10;

Now some exception if 
console.log(a); //print undefined
let a=10; //error throw for both let or const



......Excercise..............
console.log("I am a "+job)
var job="Web Dev"
console.log("I am a "+job)
function who(){
    console.log("I am a "+job)
    job="FullStack"
    console.log("I am a "+job)
}

:output:
I am a undefined
I am a Web dev
I am a undefined
I am a fullstack


so here in every scope both in function and global first copy that variable in top and assign with undefined 