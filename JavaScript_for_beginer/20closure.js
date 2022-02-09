function init(){
    const myname="Sumit Kr Das";
    function printName(){
        console.log(myname);
    }
    return printName;
}
init();
// here printname() access myname value , bcz js have lexical scope
// clouser is a a functtion bind together in it's lexical environment


function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    return y;
}
var z= x();
console.log(z);// it print whole y function



