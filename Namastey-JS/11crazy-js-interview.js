//1. what is closure?
// -> a function with his outer environment, togather forms a closure. In other words you can say that closure is a combination of a function and it's lexical scope bundle togather forms a closure.

// Explain More, >> each and every function in js access to its outer lexical environment , access to its variables and functions  that are present in environment of its Perents. 
// it can even remember the refferences when it exicuted in some other scope not in it's original scope.

// 2. Give an example:
    function outer () {
        var a=2;
        function inner(){
            console.log(a);  // its form  a closure bcz it access its outer environment variable 
        }
        inner();
    }
    outer();


    
    function outer () {
        var a=2;
        function inner(){
            console.log(a);  // it also remeber the refference of a 
        }
        return inner;
    } 
    outer()();
// if we declare variable in line num  23-24 then its still a closure


// 3. explain two parenthesis in line number 26
outer () // this return inner function
outer ()() // run the inner function  exacly same of var x= outer (); x();


//4. 
function x5(){
    var a5=50;
    function y5(b){
        function z5(){
            console.log(a5 , b , c5);
        }
        let c5=40;
        return z5;
    }
    return y5;
}
let c5=33; // here not get 33 if there is no line num42 then 33 will get
var clo= x5()("Hello");
clo();
// its output is 5o hello 40


//5. Advantages of closure
/* i> helus in data hiding and encapsulation.
   ii> it helps to make higher order function , function currying etc
   iii> its the most beautiful part in js */

//6. data Hiding and encapsulation in js?
/*in the closure past functions and variables bundled up and in this cas other part of a program cant access that variables so in that way its data privacy happen.*/
 // Example-->
 var count =0;
 function incre(){
     count++;
 }
 // now any one can acceess that count variable easily so we use closure
 function clo(){
    var count =0;
    function incre(){
        count++;
    }
 } // now no one access..
 // but if we want to access that function variable count we will do a return
 function clo(){
    var count =0;
   return function incre(){
        count++;
    }
 } 
 var x77= clo();
 x77(); // it return the increament counter
 var x78=clo();
 x78(); //it will a new one and start from 1 not have connection with x77
 
 
 //7. constructor in JS / if we want to use increament and decreament also so how you modify your previous program
 function clo(){
    var count =0;
   this.incre=  function (){
        count++;
    }
    this.decre= function(){
        count --;
    }
 } 
 var a44=new clo(); // its a constructor so we need to use new keyword
 a44.incre();
 a44decre();


 //8. Disadvantages of closures
  /* i> overconssumption of memory
    ii>closure variables are not garbage collected
    iii> if you cant handle properties properly then memory leaks also happen
    */
 
//9. Garbage collector in js
// js is a high level programming language, unlike c++ or c where memory allocate and deallocate base on devolopers, if there is a unused variables, garbage collecters just take it out of memory


//10. closure and garbage collector or memory leak related each other?
//  
function x58(){
    var x7=0;
    return function x85(){
        console.log(x7);
    }
}
var d=x58();
d();
//once x85 return then x7 no longer use, and it has been garbage collector, and go out from the memory.
// but here it can not be freed bcz we use it , bcz it somewhere use in d;
// but in some modern garbage collector mechanism like v8 and chrome then reach those and they smartly collect this garbage variables

//11. smart garbage collection of V* and others
function x58(){
    var x7=0,z7=87; // here z7 not use so its garbage collected smartly
    return function x85(){
        console.log(x7);
    }
}
var d=x58();
d();
