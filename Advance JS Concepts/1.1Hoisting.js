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
vara=10;

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





..........................Guess output...............
let a=20;
let b=30;

function s1(){
    console.log(a+b);
}
let x1=()=> {
   console.log(a+b);
}
function s2(){
    console.log(this.a+this.b);
}
var x2=()=> {
   console.log(this.a+this.b);
}

x1();
s1();
x2();
s2();
/*
In both the cases(x2 and s2), this refers to 
window
 object. As you have defined the variable using 
let
, they are not present in the object. Hence, they are adding two undefined which results in 
NaN
. If you change 
let
 to 
var
 where you are defining 'a' and 'b', it will work.
*/ 

/*
What About this?
The handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the this keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.*/