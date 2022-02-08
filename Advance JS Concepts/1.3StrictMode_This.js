Use Strict instructs the browser to use the strict MediaStreamAudioDestinationNode, which is a reduced and safer feature set of JS .

Example:

"Use Strict"

function sum(a,b){
    add=a+b; //bcz we dont write var it throws error.
    console.log(add);
}
sum(10,10)


Full list of use strict:- https://www.w3schools.com/js/js_strict.asp


...this....

It mainly refers to the object its belong to . Alone it used in global object that is window . 

if we call this in side a method then it refers owner object

example:
 function fun(){
     console.log(this)
 } //here owner is global object or windows thats why it shows us windows

 #but in strict mode a regular function's this shows undefined


 .............Excercise......... 

 const t={
     name: "Rounak",
     sum: function(){
         console.log(this.name);//Rounak
         console.log(this);//t obj
         function child(){
             var name="thappa";
             console.log(name);//thappa
             console.log(this);//it shows windows bcz its owner is a function. bcz its a regular function
         }
         child();
     }

 }

