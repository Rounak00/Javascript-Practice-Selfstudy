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


