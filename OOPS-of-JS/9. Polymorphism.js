class Shape 
  {  
     display()  
    {  
      console.log("I am a shape");  
    }  
  }  
class Circle extends Shape
  {  
    display(){
      console.log("I am a circle");
    }
  }  

class Square extends Shape{
  display(){
    console.log("I am a Square");
  }
} 
var b= new Shape;
b.display();//I am a shape


b=new Square;
b.display(); //I am a Square