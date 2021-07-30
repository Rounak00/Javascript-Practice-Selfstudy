var x=1;
a();
b();
console.log(x);
function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}
// here print first 10 then 100 and atlast 1

// there are three things in call stack general start the a start and end then again b start and end and lastly general end