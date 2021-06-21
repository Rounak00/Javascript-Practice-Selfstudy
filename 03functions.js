//part1
function sayHello(){ //function definition
    console.log("Say Hellow");
}
sayHello();//function call
sayHello();
sayHello();


// part 2

function callbyVal(name){//call by value
    console.log(`My name is,${name}.how are you`);
}

callbyVal("sumit");

//part3

function returnVal(){
    return(`Sumit is my name`);
}

var s=returnVal();
console.log(`Retuened value is,${s}`);


//part 4
//datatype functionname/variablename = function() keyword
var sumit = function(){
    return("This is a different type of function");
}

console.log(sumit());

//part 5
//es6
//Fat function
const su=()=>{
console.log("Hello sir");
}
su();


// part 6
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}
console.log(isEven(3));

// .............arrow function/Fat Arrow Function.......................

var isOdd = (number) => {
    return (number % 2 != 0);
};
console.log(isOdd(3));

// .............callback function.......................
var isEvenNum = (num) => {
    return (num % 2 === 0);
}
//every means every single element
var result1 = [2, 4, 6, 8, 10].every(isEvenNum);
var result2 = [2, 3, 6, 8, 10].every(isEvenNum);
console.log(result1);
console.log(result2);

// .............callback function & arrow function shortcut.......................
var result = [2, 3, 6, 8].every((e) => (e % 2 === 0));
console.log(`Result is ${result}`);

//NB :-
// if function has only one parameter and return then ,
// let f1=(rec)=> {return rec}; ---> let f1= rec=> return rec;
