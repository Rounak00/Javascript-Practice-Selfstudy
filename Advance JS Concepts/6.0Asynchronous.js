Synchronous js: never immplement next task until the present one completed

Asynchronus js: we dont need to wait there. here AJAX web aplication model helps

Example:
 
const fun2(){
    setTimeout(()=>{console.log("call 3")},3000);
}

 const fun1(){
     console.log("CAll 1");
     fun2();
     console.log("call 2");
 }
 fun1();