// scope change related to lexical environment ...
// that case variabe not decalre in function and and js try to find otside of function its called lexical scope.

function c1(){
    console.log(a12);
}
var a12=10;
c1();


function c2(){
    a33();
    function a33(){
        console.log(a1);
    }
}
var a1=10;
c2();
// just like those 2 example
// in the second example how things happen , in call stack a33 present there try to find a1 if not found go to lexical parent  means c2 not found then go global not found then print not defined, and this way of exicution is known as scope chain.

