Closure: closure is a action , where inner function can have access to the outer function variable as well as all the global variable can. its nothing but the lexical scoping and function combination. 

const oute=(a)=>{
    var b=10;
    const inn= ()=>{console.log(a+b);} //hereinn is a closure
    inn();
}
oute(5);


Example2: that not support lexical scope property
 
const oute=(a)=>{
    var b=10;
    const inn= ()=>{console.log(a+b);} //hereinn is a closure
   return inn; 
}
let ans=oute(5);
 console.dir(ans);//return whole inn function
 ans();//run inn function


 [The return statement doesnot execute the inner function - function is executed only when followed by (), but rather the return statement returns the entire body of the function ]