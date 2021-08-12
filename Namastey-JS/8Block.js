// Block:-
//block is also known as compoud statement its us as-->
{
    //...
}
//block basically combiniing multiple js statement in a bunch of group
// .. well we use multiple statement in a block so we can use it where js expect one statement


// sometimes we see in  js if dont need curly bracess yup bcz its its true syntax when there is only one statement but for multiple statement use block in if, just like that--->
if(true){var a=10; console.log(a);}

// block scope:--->
// what all variables and functions we can access inside this block is known as block Scope.


// if we call let and const outside of block it through reffernce error


// now shadowing--->
var a8=10;
{
    var a8=90;
    let b5=50;
    const c5= 70;
    console.log(a8);
    console.log(b5);
    console.log(c5);
}
console.log(a8);
// both cases a8 = 90 bcz a8 is var which is global & pointing same space .and shodowing 90 over 10

var b5=10;
{
    var a8=90;
    let b5=50;
    const c5= 70;
    console.log(a8);
    console.log(b5);
    console.log(c5);
}
console.log(b5);
// in this case first print 50 and secon 10, bcz here b5 1st store in script and second  25 store in block
// here second b5 shadowing first b5 value
// it not only happen in block also happen in function
// similar to const also


// illeagal shadowing-->
let a=10;
{
    var a=10;
}
// we cant do this it is a sytax error

var a22=78;{
    let a22=77;
}
// but this is valid shadowing not illeagal



// now see :- 
let a88=7;
function x(){
    var a88=77;
} // it is perfect shadowing bcz var in function scope

// block scope also like the lexical scope