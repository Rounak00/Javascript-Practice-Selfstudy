class car{
    static price(){
        console.log(this);
    }
}

car.price();

//Static methods are soemthin for that we dont need a object. we mainly used it for utility functions

// normal variables and functions in class are known as instance variable and instance methods


//static variable
class Person { 
    static age = 0; 
     getAge() { return Person.age++; }
} 
const p=new Person();
console.log(Person.age); //0
console.log(p.getAge()); //0
console.log(p.getAge()); //1
console.log(Person.age); //2

//Static Method

class Person { 
    static age = 0; 
     static getAge() { return this.age++; }
} 

console.log(Person.age); //0
console.log(Person.getAge()); //0
console.log(Person.getAge()); //1


//Static block example it will run once at the first when a static member called
class a{
    static val=10;

    static{
       console.log("Static block");
    }
}

console.log(a.val);