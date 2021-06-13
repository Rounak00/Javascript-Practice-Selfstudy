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



