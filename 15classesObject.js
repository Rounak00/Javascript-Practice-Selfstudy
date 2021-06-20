// Classes, Object & Inheritance in JavaScript OOP

class Students{
    constructor(name,age,clas){   // constructor hold proerties
        this.StudentName = name;  // this keyword use for this class
        this.age = age;
        this.clas = clas;
    }
     //now see its a instance Method, if the method is static then plyer can't access biodeta method and if we want to make it static then simply use static keyword before name
    biodata(){                      
        console.log("I'm Sumit");
    }
}

class players extends Students{  //Inheritance

}

let obj1 = new players('sumit',12,"bca");  
obj1.biodata();

/* if we want to make new constructor in deriverd class then we need to use super key word.
Example:*/

 class base{
      constructor(name,age,clas){  
        this.name=name;
        this.age = age;
        this.clas = clas;
    }
    tek(){
        return `Good morning`;
    }
}
 class derived extends base{
     
     constructor(name,age,clas,game){
         super(name,age,clas);
        this.game=game;
     }
     biodata(){
         console.log(`${super.tek()} 
         Hello ${this.name}, your age = ${this.age} and your class= ${this.clas} and yout favourite game = ${this.game}`);
         // here in ${super.tek()} we can access base class's function output
     }
    
 }
 
 
 let obj= new derived('RM',25,8,'Cricket');
 obj.biodata();
 