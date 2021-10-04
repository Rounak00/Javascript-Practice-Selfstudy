class A  
  {  
     display()  
    {  
      console.log("A is invoked");  
    }  
  }  
class B extends A  
  {  
  }  
var b=new B();  
b.display();  