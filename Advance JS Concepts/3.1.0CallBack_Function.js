Any function that are passed as an argument, here that argument known as call back function.

A callback is a function that is to be executed after another function has finished execution - hence the name is callback(). 

const fun1=()=> {
    setTimeout(function(){console.log("Hello2")},3000)
}
const fun2=()=> {
    console.log(`Hello2`)
}

fun1();
fun2();

// her ans will be first fun2 then fun1 but if we want to call a function after previous will end then we use callback
Example 1: #it is callback
const fun1=()=> {
    setTimeout(function(){console.log("Hello2")},3000);
    fun2();
}
const fun2=()=> {
    console.log(`Hello2`)
}

fun1();


Example 2: #it is callback function
const fun1=(callfun)=> {
    setTimeout(function(){console.log("Hello2")},3000);
    callfun();
}
const fun2=()=> {
    console.log(`Hello2`)
}

fun1(fun2);