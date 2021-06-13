//Lexical scoping in javascript
//that process is calld lexical calling
function init(){
    var myName="Sumit Kr. Das";
    function userName(){
        console.log(`The name of the user is ${myName}`);
    }
    userName();
}
init();