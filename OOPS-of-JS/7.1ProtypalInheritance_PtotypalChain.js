//if we ever use arrau, function, objects and etc in js we see we get many inbuilt functions like length,bind,push etc now js put all those thing in a self obj named as __proto__ and it also secretly attached with your Function , obj, array etc

//example:
 
 arr[10]=" ";
 var obj={};
 function f(){};
 
 // with all those we can access __proto__ obj;
  arr.__proto__
  obj.__proto__
  f.__proto__ 

Now arr.__proto__ and Array.prototype those have same value  
arr.__proto__.__proto__ and Object.prototype those are same
arr.__proto__.__proto__.__proto__ in null  //here this whole thing is known as prototypal chain


Same for objects obj.__proto__ is same as Object.prototype
and obj.__proto__.__proto__ in null


Same for function f.__proto__ is equal to Function.prototype
and f.__proto__.__proto__ is equal to Object.prototype



//Prototypal inheritance
let obj1={
    name:"Ghost",
    no:80
}
let obj2={
    name:" Rounak "
}
obj2.__proto__=obj1;

console.log(obj2.no);


//we can also make function and use as inbuilt function 
Function.prototype.mybind=function(){
    console.log("RM");
}

function f(){}
f.mybind(); //now this function can access mybind function
