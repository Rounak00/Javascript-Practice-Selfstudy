function init(){
    const myname="Sumit Kr Das";
    console.log("(return printName)-> is accutaly passing a refrence");
    function printName(){
        console.log(myname);
    }
    return printName;
}
init();
// value = printname();


