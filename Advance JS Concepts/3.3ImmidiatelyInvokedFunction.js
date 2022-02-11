IIFE: Immidiately Invoked Function Expression 
#its run as soon as it define 
#It is a design which is also known as selfexecuting Anonymous Function and contains two major parts 
     1. the first part is your grouping operator
     2. create IIFE
 


     (
         function(){
             var a= '50k';
             console.log(a);
         }
     ) (); //we make this so data must be private so no one in global can access a; Nodependency also. 
     
     